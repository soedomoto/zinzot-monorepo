import { WxtAPI } from "@/adapter/wxt-api";
import { IconBookDownload, IconCheck, IconListTree, IconUser, IconX, IconZeppelin } from "@tabler/icons-react";
import { DoWebResultType, hashPdfContent, text, uint8ArrayToBase64, type TranslatorFunctionsType } from "@zinzot/translators";
import {
  API,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
  ScrollArea,
  Spinner
} from "@zinzot/ui";
import { useEffect, useMemo, useState } from "react";

import { DtoDoiMetadata } from "@zinzot/contracts/dist/dtos";
import "@zinzot/ui/dist/ui.css";
import { atom, useAtom } from "jotai";
import "./dialog-downloader.css";

type AuthResponse = Awaited<ReturnType<API["authGoogle"]>>;
export type DialogDownloaderProps = {
  wxtApi: WxtAPI;
  api: API;
  translator: TranslatorFunctionsType
};

const visibleAtom = atom(true);
const authStateAtom = atom<{ loading: boolean; data: AuthResponse | null }>({ loading: false, data: null });
const referencesStateAtom = atom<{
  type?: string | true | null;
  searchResults?: Record<string, string>;
  doWebPayload?: { sourceUrl: string; doiMetadata: DtoDoiMetadata }[];
  selectedItemsIdx?: number[];
  savingItemsIdx?: number[];
}>({});

function useAuth({ api }: DialogDownloaderProps) {
  const [, setAuthState] = useAtom(authStateAtom);

  const handleLogin = async () => {
    setAuthState({ loading: true, data: null });
    try {
      const response = await api.authGoogle();
      setAuthState({ loading: false, data: response ?? null });
    } catch (error) {
      void error;
      console.error("Authentication failed:", error);
    } finally {
      setAuthState(current => ({ ...current, loading: false }));
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return { handleLogin };
}

function useReferences({ api, translator }: DialogDownloaderProps) {
  const [referencesState, setReferencesState] = useAtom(referencesStateAtom);

  const saveSelectedItems = async (selectedItemsIdx: number[]) => {
    setReferencesState(({ savingItemsIdx, ...current }) => ({ ...current, savingItemsIdx: [...(savingItemsIdx || []), ...selectedItemsIdx] }));
    await translator?.doWeb?.(
      document, window.location.href,
      selectedItemsIdx.map((i) => (referencesState?.doWebPayload || [])[i]),
      async (item: DoWebResultType[number], index?: number) => {
        item.sourceUrl = new URL(item.sourceUrl || window.location.href, window.location.href).toString();
        for (const att of item.doiMetadata?.attachments || []) {
          if (att?.url && !att?.url?.startsWith('http')) continue; // skip s3 file

          att.url = new URL(att?.url || window.location.href, window.location.href).toString();

          try {
            console.log("Pre-fetching attachment:", att.url);
            const response = await fetch(att.url);
            if (response.ok && response.headers.get('content-type')?.startsWith('application/pdf')) {
              const content = new Uint8Array(await response.arrayBuffer());
              const hash = await hashPdfContent(content);

              att.hash = hash;
              att.mimeType = 'application/pdf';

              try {
                await api.getPutAttachmentPresignedUrl(`${hash}.pdf`, 'application/pdf')
                  .then((url) => {
                    return fetch(url, {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/pdf',
                      },
                      body: content,
                    });
                  });
                att.url = `s3://${hash}.pdf`;
              } catch (e) {
                console.error("Failed to upload attachment:", att.url, e);
              }
            }
          } catch (e) {
            console.error("Failed to Pre-fetch attachment:", att.url, e);
          } finally {
            if (item.doiMetadata) {
              try {
                await api.saveReferences({
                  source_url: item.sourceUrl || window.location.href,
                  results: [{
                    doi_metadata: item.doiMetadata,
                  }],
                });
              } catch (e) {
                void (e);
                console.error("Failed to save reference for item:", item, e);
              }
            }

            setReferencesState(({ savingItemsIdx, ...current }) => ({ ...current, savingItemsIdx: (savingItemsIdx || []).filter(i => i !== selectedItemsIdx[index || 0]) }));
          }
        }
      }
    );
  };

  useEffect(() => {
    const type = translator?.detectWeb?.(document, window.location.href) || null;
    if (type) {
      console.log(`Zinzot Web Importer: Detected type ${type}`);
      setReferencesState(current => ({ ...current, type }));
    } else {
      console.log("Zinzot Web Importer: No type detected");
      return;
    }
  }, [translator?.detectWeb, document, window.location.href]);

  useEffect(() => {
    (async () => {
      if (referencesState.type) {
        let searchResults: Record<string, string> = {};
        if (referencesState.type == 'multiple') {
          searchResults = translator?.getSearchResults?.(document) || {};
        } else {
          searchResults[window.location.href] = text(document, 'title') || 'Untitled';
        }

        const eRefs = await api.referencesCheckExists(Object.keys(searchResults).map(url => ({ url })));

        let doWebPayload: { sourceUrl: string; doiMetadata: DtoDoiMetadata }[] = [];
        for (const url in searchResults) {
          let eRef = eRefs?.find(er => er.URL === url);
          if (eRef && !eRef?.inUserLibrary) eRef.id = undefined;

          doWebPayload.push({
            sourceUrl: url,
            doiMetadata: eRef ? eRef : {
              title: searchResults[url],
              URL: url,
              inUserLibrary: false,
            },
          });
        }

        setReferencesState(({ type, ...current }) => ({ type, ...current, searchResults, doWebPayload }));
      }
    })();
  }, [referencesState.type]);

  return { saveSelectedItems };
}

export default function DialogDownloader({ wxtApi, api, translator }: DialogDownloaderProps) {
  const { handleLogin } = useAuth({ wxtApi, api, translator });
  const { saveSelectedItems } = useReferences({ wxtApi, api, translator });

  const [authState] = useAtom(authStateAtom);
  const [visible, setVisible] = useAtom(visibleAtom);
  const [referencesState, setReferencesState] = useAtom(referencesStateAtom);

  const selectedCount = referencesState?.selectedItemsIdx?.length || 0;
  const hasSelection = selectedCount > 0;

  const selectAllEligible = () => {
    setReferencesState((current) => ({
      ...current,
      selectedItemsIdx: (current?.doWebPayload || [])
        .map((item, index) => (!item?.doiMetadata?.DOI ? index : -1))
        .filter((index) => index !== -1)
    }));
  }

  const canSelectAll = useMemo(
    () => (referencesState?.doWebPayload || []).some((item) => !item?.doiMetadata?.DOI),
    [referencesState?.doWebPayload]
  );

  const handleToggleSelect = (index: number, checked: boolean) => {
    if (checked) {
      setReferencesState((current) => ({
        ...current,
        selectedItemsIdx: [...(current?.selectedItemsIdx || []), index],
      }));
      return;
    }
    setReferencesState((current) => ({
      ...current,
      selectedItemsIdx: (current?.selectedItemsIdx || []).filter((item) => item !== index),
    }));
  };

  return visible ? (
    <div className="fixed top-3 right-3 w-md rounded-2xl shadow-2xl shadow-gray-300">
      <Card size="sm" className="overflow-hidden w-full">
        <CardHeader>
          <div className="flex items-center justify-between gap-3 w-full">
            <CardTitle className="flex-1">Zinzot Web Importer</CardTitle>
            <div className="flex flex-wrap items-center gap-1 md:flex-row">
              {authState.data?.user ? (
                <>
                  <Avatar size="sm">
                    {authState.data.user?.pictureUrl && <AvatarImage src={authState.data.user?.pictureUrl} />}
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <Button size="icon-xs" variant="outline" aria-label="Open library" className="cursor-pointer" onClick={() => wxtApi.openOptions()}>
                    <IconListTree />
                  </Button>
                </>
              ) : (
                <Button size="icon-xs" variant="outline" disabled={authState.loading} onClick={handleLogin} aria-label="Log in">
                  <IconUser />
                </Button>
              )}
              <Button size="icon-xs" variant="destructive" aria-label="Close dialog"
                onClick={() => setVisible(false)}
              >
                <IconX />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full h-96">
            <ItemGroup className="w-full gap-0">
              {(referencesState?.doWebPayload || []).map((item, index) => (
                <Item key={index} className="px-0">
                  <ItemMedia variant="icon">
                    {item?.doiMetadata?.id ? (
                      <IconCheck className="text-emerald-600" />
                    ) : (
                      <Checkbox
                        checked={(referencesState?.selectedItemsIdx || []).includes(index)}
                        onCheckedChange={(checked) =>
                          handleToggleSelect(index, checked === true)
                        }
                      />
                    )}
                  </ItemMedia>
                  <ItemContent className="gap-1">
                    <ItemTitle onClick={() => wxtApi.openUrl(item?.doiMetadata?.URL || '#')}>
                      <span className="cursor-pointer hover:underline">{item?.doiMetadata?.title || "Untitled"}</span>
                    </ItemTitle>
                    <ItemDescription>{item?.doiMetadata?.abstract || "No abstract available"}</ItemDescription>
                  </ItemContent>
                  <ItemActions className="self-start">
                    {
                      referencesState?.savingItemsIdx?.includes(index) ? (
                        <Spinner data-icon="inline-start" fontSize="sm" className="relative right-2 top-1" />
                      ) : (
                        <Button variant="ghost" size="icon-sm" className="rounded-full relative -top-1" onClick={() => saveSelectedItems([index])}>
                          <IconBookDownload />
                        </Button>
                      )
                    }
                  </ItemActions>
                </Item>
              ))}
            </ItemGroup>
          </ScrollArea>
        </CardContent>
        <CardFooter className="justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <label className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={canSelectAll && (referencesState?.selectedItemsIdx || []).length > 0}
                onCheckedChange={(checked) => {
                  if (checked === true) selectAllEligible();
                  else setReferencesState((current) => ({ ...current, selectedItemsIdx: [] }));
                }}
                disabled={!canSelectAll}
              />
              Select All
            </label>
            <Badge variant={hasSelection ? "success" : "secondary"}>
              {selectedCount} item{selectedCount !== 1 ? "s" : ""} selected
            </Badge>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={async () => {
              saveSelectedItems(referencesState?.selectedItemsIdx || []);
            }}
            disabled={!hasSelection}
          >
            Save
          </Button>
        </CardFooter>
      </Card>

      {/* <Card className="overflow-hidden">
        <CardHeader className="gap-3">
          <div className="flex items-center justify-between gap-3">
            <CardTitle className="text-lg">Zinzot</CardTitle>
            <div className="flex items-center gap-2">
              {auth.data?.user ? (
                <Avatar size="sm">
                  <AvatarImage src={(auth.data.user as { picture?: string }).picture} />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ) : (
                <Button
                  variant="secondary"
                  size="icon-sm"
                  onClick={handleLogin}
                  disabled={auth.loading}
                  aria-label="Log in"
                >
                  <IconLogin />
                </Button>
              )}
              <a
                href={browser.runtime.getURL(`/options.html`)}
                target="zinzot-options"
                rel="noopener noreferrer"
                title="Manage Library"
              >
                <Button variant="secondary" size="icon-sm" aria-label="Open library">
                  <IconListTree />
                </Button>
              </a>
              <Button
                variant="destructive"
                size="icon-sm"
                onClick={() => setVisible(false)}
                aria-label="Close dialog"
              >
                <IconX />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <ScrollArea className="max-h-[400px] pr-2">
            <div className="space-y-2">
              {doWebPayload?.map((item, index) => {
                const doiMetadata = item.doiMetadata;
                const hasLink = !!doiMetadata?.id && !!doiMetadata?.attachments?.some((att) => att.url);
                const title = Array.isArray(doiMetadata?.title)
                  ? doiMetadata?.title.join(", ")
                  : doiMetadata?.title || "Untitled";

                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                        aria-label="Toggle metadata"
                      >
                        <IconChevronRight
                          className={`transition-transform duration-300 ${expandedItem === index ? "rotate-90" : ""}`}
                        />
                      </Button>
                      <div className="flex min-w-0 flex-1 items-center gap-2">
                        {doiMetadata?.id ? (
                          <IconCheck className="text-emerald-600" />
                        ) : (
                          <Checkbox
                            checked={selectedItemsIdx.includes(index)}
                            onCheckedChange={(checked) =>
                              handleToggleSelect(index, checked === true)
                            }
                          />
                        )}
                        {doiMetadata?.id ? (
                          <a
                            href={browser.runtime.getURL(`/options.html?id=${doiMetadata.id}`)}
                            target="zinzot-options"
                            rel="noopener noreferrer"
                            className="min-w-0 flex-1 truncate text-sm font-medium text-foreground hover:underline"
                            title={title}
                          >
                            {title}
                          </a>
                        ) : (
                          <div className="min-w-0 flex-1 truncate text-sm font-medium" title={title}>
                            {title}
                          </div>
                        )}
                        {hasLink && (
                          <a
                            href={browser.runtime.getURL(`/pdf.html?id=${doiMetadata?.id}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Badge variant="destructive" className="gap-1">
                              <IconPdf className="size-3" />
                              PDF
                            </Badge>
                          </a>
                        )}
                      </div>
                    </div>

                    {expandedItem === index && (
                      <ScrollArea className="h-44 rounded-lg border border-border bg-muted/20 px-3 py-2">
                        <dl className="space-y-2 text-xs">
                          {doiMetadata?.title && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Title</dt>
                              <dd className="flex flex-wrap gap-1">
                                {Array.isArray(doiMetadata.title) ? (
                                  doiMetadata.title.map((t: string, i: number) => (
                                    <Badge key={i} variant="secondary">
                                      {t}
                                    </Badge>
                                  ))
                                ) : (
                                  <span className="text-foreground">{doiMetadata.title}</span>
                                )}
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.DOI && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">DOI</dt>
                              <dd className="text-foreground">{doiMetadata.DOI}</dd>
                            </div>
                          )}
                          {doiMetadata?.type && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Type</dt>
                              <dd>
                                <Badge variant="secondary">{doiMetadata.type}</Badge>
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.URL && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">URL</dt>
                              <dd>
                                <a
                                  href={browser.runtime.getURL(`/pdf.html?id=${doiMetadata?.id}`)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  {doiMetadata.URL}
                                </a>
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.abstract && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Abstract</dt>
                              <dd className="text-foreground">{doiMetadata.abstract}</dd>
                            </div>
                          )}
                          {doiMetadata?.author && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Authors</dt>
                              <dd className="flex flex-wrap gap-1">
                                {Array.isArray(doiMetadata.author)
                                  ? doiMetadata.author.map((a: any, i: number) => (
                                      <Badge key={i} variant="secondary">
                                        {a.name || a.family}
                                      </Badge>
                                    ))
                                  : (
                                      <Badge variant="secondary">{doiMetadata.author}</Badge>
                                    )}
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.editor && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Editors</dt>
                              <dd className="flex flex-wrap gap-1">
                                {Array.isArray(doiMetadata.editor)
                                  ? doiMetadata.editor.map((a: any, i: number) => (
                                      <Badge key={i} variant="secondary">
                                        {a.name || a.family}
                                      </Badge>
                                    ))
                                  : (
                                      <Badge variant="secondary">{doiMetadata.editor}</Badge>
                                    )}
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.translator && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Translators</dt>
                              <dd className="flex flex-wrap gap-1">
                                {Array.isArray(doiMetadata.translator)
                                  ? doiMetadata.translator.map((a: any, i: number) => (
                                      <Badge key={i} variant="secondary">
                                        {a.name || a.family}
                                      </Badge>
                                    ))
                                  : (
                                      <Badge variant="secondary">{doiMetadata.translator}</Badge>
                                    )}
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.publisher && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Publisher</dt>
                              <dd>
                                <Badge variant="secondary">{doiMetadata.publisher}</Badge>
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.["container-title"] && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Journal/Container</dt>
                              <dd className="flex flex-wrap gap-1">
                                {Array.isArray(doiMetadata["container-title"]) ? (
                                  doiMetadata["container-title"].map((t: string, i: number) => (
                                    <Badge key={i} variant="secondary">
                                      {t}
                                    </Badge>
                                  ))
                                ) : (
                                  <Badge variant="secondary">{doiMetadata["container-title"]}</Badge>
                                )}
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.issued && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Issued</dt>
                              <dd>
                                <Badge variant="secondary">
                                  {typeof doiMetadata.issued === "number"
                                    ? doiMetadata.issued
                                    : doiMetadata.issued["date-parts"]?.[0]?.[0] ||
                                      doiMetadata.issued["date-time"]?.split("-")[0]}
                                </Badge>
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.volume && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Volume</dt>
                              <dd>
                                <Badge variant="secondary">{doiMetadata.volume}</Badge>
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.issue && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Issue</dt>
                              <dd>
                                <Badge variant="secondary">{doiMetadata.issue}</Badge>
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.page && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Pages</dt>
                              <dd>
                                <Badge variant="secondary">{doiMetadata.page}</Badge>
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.ISBN && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">ISBN</dt>
                              <dd className="flex flex-wrap gap-1">
                                {Array.isArray(doiMetadata.ISBN) ? (
                                  doiMetadata.ISBN.map((isbn: string, i: number) => (
                                    <Badge key={i} variant="secondary">
                                      {isbn}
                                    </Badge>
                                  ))
                                ) : (
                                  <Badge variant="secondary">{doiMetadata.ISBN}</Badge>
                                )}
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.ISSN && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">ISSN</dt>
                              <dd className="flex flex-wrap gap-1">
                                {Array.isArray(doiMetadata.ISSN) ? (
                                  doiMetadata.ISSN.map((issn: string, i: number) => (
                                    <Badge key={i} variant="secondary">
                                      {issn}
                                    </Badge>
                                  ))
                                ) : (
                                  <Badge variant="secondary">{doiMetadata.ISSN}</Badge>
                                )}
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.subject && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Subjects</dt>
                              <dd className="flex flex-wrap gap-1">
                                {Array.isArray(doiMetadata.subject) ? (
                                  doiMetadata.subject.map((s: string, i: number) => (
                                    <Badge key={i} variant="secondary">
                                      {s}
                                    </Badge>
                                  ))
                                ) : (
                                  <Badge variant="secondary">{doiMetadata.subject}</Badge>
                                )}
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.keywords && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Keywords</dt>
                              <dd className="flex flex-wrap gap-1">
                                {Array.isArray(doiMetadata.keywords) ? (
                                  doiMetadata.keywords.map((k: string, i: number) => (
                                    <Badge key={i} variant="secondary">
                                      {k}
                                    </Badge>
                                  ))
                                ) : (
                                  <Badge variant="secondary">{doiMetadata.keywords}</Badge>
                                )}
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.language && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Language</dt>
                              <dd>
                                <Badge variant="secondary">{doiMetadata.language}</Badge>
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.link && doiMetadata.link[0]?.URL && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Link</dt>
                              <dd>
                                <a
                                  href={doiMetadata.link[0].URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  {doiMetadata.link[0].URL}
                                </a>
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.source && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Source</dt>
                              <dd>
                                <Badge variant="secondary">{doiMetadata.source}</Badge>
                              </dd>
                            </div>
                          )}
                          {doiMetadata?.score && (
                            <div className="grid gap-1">
                              <dt className="text-muted-foreground">Score</dt>
                              <dd>
                                <Badge variant="secondary">{doiMetadata.score.toFixed(2)}</Badge>
                              </dd>
                            </div>
                          )}
                        </dl>
                      </ScrollArea>
                    )}
                    {index < doWebPayload.length - 1 && <Separator />}
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>

        <CardFooter className="justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <label className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={canSelectAll && selectedItemsIdx.length > 0}
                onCheckedChange={(checked) => {
                  if (checked === true) selectAllEligible();
                  else setSelectedItemsIdx([]);
                }}
                disabled={!canSelectAll}
              />
              Select All
            </label>
            <Badge variant={hasSelection ? "success" : "secondary"}>
              {selectedCount} item{selectedCount !== 1 ? "s" : ""} selected
            </Badge>
          </div>
          <Button
            variant="secondary"
            onClick={() => {
              onDoWebItemsSelected?.(selectedItemsIdx.map((i) => doWebPayload[i]));
              setVisible(false);
            }}
            disabled={!hasSelection}
          >
            Save
          </Button>
        </CardFooter>

        {!auth?.data && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <div className="relative flex h-full items-center justify-center p-4">
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Login Required</CardTitle>
                  <CardDescription>
                    Please log in to your account to save items.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-end">
                  <Button onClick={handleLogin} disabled={auth.loading}>
                    Login
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </Card> */}
    </div>
  ) : (
    <div className="fixed inset-y-0 right-4 z-0 flex items-center pointer-events-none">
      <div className="pointer-events-auto relative">
        <Button variant="secondary" size="icon-lg" onClick={() => setVisible(true)}>
          <IconZeppelin className="size-8" />
        </Button>
        <Badge variant="destructive" className="absolute -bottom-1 -right-1">
          {(referencesState?.doWebPayload || []).length}
        </Badge>
      </div>
    </div>
  );
}