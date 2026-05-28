import { z } from 'zod';
import jwt from 'jsonwebtoken';
export type { DtoDoiMetadata } from './dtos.js';
export * from './csl-citation.js';
export * from './csl-data.js';
export * from './context.js';

import { initTRPC, TRPCError } from '@trpc/server';
import { Context, createContext } from './context.js';
import { CSLData, Prisma } from '@zinzot/db';
import { type NameVariable } from './csl-data.js'
import { DtoDoiMetadataSchema, DtoDoiMetadata } from './dtos.js';

// Schemas matching the new Prisma models based on FastAPI models

// Auth DTOs
export const authGoogleSchema = z.object({
  code: z.string(),
  redirectUri: z.string(),
});

export const authOutputSchema = z.object({
  token: z.string(),
  user: z.object({
    id: z.number().int(),
    email: z.string(),
    name: z.string().nullable(),
    pictureUrl: z.string().nullable(),
  }),
});

export type AuthOutput = z.infer<typeof authOutputSchema>;

// Collection DTOs
export const collectionSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  name: z.string(),
  description: z.string().nullable(),
  color: z.string().nullable(),
  parentId: z.number().int().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createCollectionSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  color: z.string().optional(),
  parentId: z.number().int().optional(),
});

export const updateCollectionSchema = z.object({
  id: z.number().int(),
  name: z.string().optional(),
  description: z.string().optional(),
  color: z.string().optional(),
});

// Library DTOs
export const userLibrarySchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  doiMetadataId: z.number().int(),
  createdAt: z.date(),
});

// Annotation DTOs
export const annotationSchema = z.object({
  id: z.number().int(),
  version: z.number().int(),
  parentId: z.number().int().nullable(),
  rootId: z.number().int().nullable(),
  userLibraryId: z.number().int(),
  pageNumber: z.number().int().nullable(),
  originalContent: z.string().nullable(),
  comment: z.string().nullable(),
  color: z.string().nullable(),
  type: z.enum(['HIGHLIGHT', 'UNDERLINE', 'STRIKETHROUGH']).nullable(),
  rects: z.any(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// References/Metadata DTOs
export const doiMetadataSchema = z.object({
  id: z.number().int(),
  doi: z.string().nullable(),
  title: z.string().nullable(),
  url: z.string().nullable(),
});

const checkExistsInput = z.object({
  doi: z.string().optional(),
  url: z.string().optional(),
  isbn: z.string().optional(),
  issn: z.string().optional(),
  file_hash: z.string().optional(),
}).array();

export type CheckExistsInput = z.infer<typeof checkExistsInput>;

const userDoiMetadata = DtoDoiMetadataSchema.extend({
  inUserLibrary: z.boolean().default(false).optional(),
});

export type UserDoiMetadata = z.infer<typeof userDoiMetadata>;

const saveWebResultRequestInput = z.object({
  results: z.object({
    doi_metadata: DtoDoiMetadataSchema,
  }).array(),
  source_url: z.string(),
});

export type SaveWebResultRequestInput = z.infer<typeof saveWebResultRequestInput>;






export const t = initTRPC.context<Context>().create();
export const publicProcedure = t.procedure;

const isAuthed = t.middleware(async ({ ctx, next }) => {
  if (!ctx.sessionToken) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Missing or invalid Bearer token'
    });
  }

  try {
    const { sub } = jwt.verify(ctx.sessionToken, process.env.JWT_SECRET!, {
      algorithms: [process.env.JWT_ALGORITHM! as jwt.Algorithm],
    }) as { sub: string; exp: number; };

    const userSession = await ctx.prisma.userSession.findFirst({
      where: {
        token: ctx.sessionToken,
        expires: { gt: new Date() },
        user: { email: sub },
      },
      include: { user: true },
    });
    
    return next({
      ctx: {
        ...ctx,
        user: userSession?.user,
      },
    });
  } catch (error) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Token verification failed'
    });
  }
});
export const protectedProcedure = t.procedure.use(isAuthed);

export const appRouter = t.router({
  auth: t.router({
    google: t.procedure
      .input(authGoogleSchema)
      .output(authOutputSchema)
      .mutation(async ({ input, ctx }) => {
        // Exchange authorization code for access token
        const token: { access_token: string; expires_in: number; refresh_token: string; scope: string; token_type: string; id_token: string } = await fetch("https://oauth2.googleapis.com/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            client_id: process.env.GOOGLE_CLIENT_ID!,
            client_secret: process.env.GOOGLE_CLIENT_SECRET!,
            code: input.code,
            grant_type: "authorization_code",
            redirect_uri: input.redirectUri,
          }),
        })
          .then(res => res.json() as any);

        // Fetch user info from Google using the access token
        const userInfo: { sub: string; name: string; given_name: string; family_name: string; picture: string; email: string; email_verified: boolean } = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${token.access_token}`,
          },
        })
          .then(res => res.json() as any)
          .catch(err => {
            console.error("Failed to fetch user info from Google:", err);
          });

        // Upsert user in the database
        const dbUser = await ctx.prisma.user.upsert({
          where: { email: userInfo.email },
          update: {
            name: userInfo.name,
            pictureUrl: userInfo.picture,
          },
          create: {
            email: userInfo.email,
            name: userInfo.name,
            pictureUrl: userInfo.picture,
          },
        });

        // Create a session token (JWT) for the user
        const expires = new Date(Date.now() + 1000 * 60 * parseInt(process.env.JWT_EXPIRE_MINUTES || '10080'));
        const payload = { sub: userInfo.email, exp: Math.floor(expires.getTime() / 1000) };
        const sessionToken = jwt.sign(payload, process.env.JWT_SECRET!, { algorithm: process.env.JWT_ALGORITHM! as jwt.Algorithm });

        await ctx.prisma.userSession.create({
          data: {
            userId: dbUser.id,
            token: sessionToken,
            expires: expires,
          },
        });

        return { token: sessionToken, user: dbUser };
      }),
    me: t.procedure
      .query(async () => { throw new Error('Not implemented'); }),
    logout: t.procedure
      .mutation(async () => { throw new Error('Not implemented'); })
  }),

  collections: t.router({
    list: t.procedure
      .output(z.array(collectionSchema))
      .query(async () => { throw new Error('Not implemented'); }),
    create: t.procedure
      .input(createCollectionSchema)
      .output(collectionSchema)
      .mutation(async () => { throw new Error('Not implemented'); }),
    update: t.procedure
      .input(updateCollectionSchema)
      .output(collectionSchema)
      .mutation(async () => { throw new Error('Not implemented'); }),
    delete: t.procedure
      .input(z.object({ id: z.number().int() }))
      .mutation(async () => { throw new Error('Not implemented'); }),
  }),

  library: t.router({
    list: t.procedure
      .output(z.array(userLibrarySchema))
      .query(async () => { throw new Error('Not implemented'); }),
    delete: t.procedure
      .input(z.object({ id: z.number().int() }))
      .mutation(async () => { throw new Error('Not implemented'); }),
  }),

  references: t.router({
    checkExists: protectedProcedure
      .input(checkExistsInput)
      .output(userDoiMetadata.array())
      .mutation(async ({ input, ctx }) => {
        const dictFoundReferences = new Map<string, CSLData & { inUserLibrary?: boolean }>();

        // Check by DOI
        const dois = input.map(item => item.doi).filter((d): d is string => !!d);
        if (dois.length > 0) {
          const results = await ctx.prisma.cSLData.findMany({
            where: { DOI: { in: dois } }
          });
          results.forEach(ref => dictFoundReferences.set(ref.id, ref));
        }

        // Check by URL
        const urls = input.map(item => item.url).filter((u): u is string => !!u);
        if (urls.length > 0) {
          const results = await ctx.prisma.cSLData.findMany({
            where: { URL: { in: urls } }
          });
          results.forEach(ref => dictFoundReferences.set(ref.id, ref));
        }

        // Check by ISBN
        const isbns = input.map(item => item.isbn).filter((i): i is string => !!i);
        if (isbns.length > 0) {
          const results = await ctx.prisma.cSLData.findMany({
            // where: { stringArrays: { some: { arrayType: 'ISBN', value: { in: isbns } } } }
            where: { ISBN: { in: isbns } }
          });
          results.forEach(ref => dictFoundReferences.set(ref.id, ref));
        }

        // Check by ISSN
        const issns = input.map(item => item.issn).filter((i): i is string => !!i);
        if (issns.length > 0) {
          const results = await ctx.prisma.cSLData.findMany({
            // where: { issnTypes: { some: { value: { in: issns } } } }
            where: { ISSN: { in: issns } }
          });
          results.forEach(ref => dictFoundReferences.set(ref.id, ref));
        }

        // Check by attachment file_hash
        const file_hashes = input.map(item => item.file_hash).filter((h): h is string => !!h);
        if (file_hashes.length > 0) {
          const results = await ctx.prisma.cSLData.findMany({
            // where: { attachments: { some: { hash: { in: file_hashes } } } }
            where: { attachments: { some: { hash: { in: file_hashes } } } }
          });
          results.forEach(ref => dictFoundReferences.set(ref.id, ref));
        }

        // Check whether found references are in user's library (if user is authenticated)
        if (ctx.user) {
          const userLibraries = await ctx.prisma.userLibrary.findMany({
            where: {
              userId: ctx.user.id,
              cslDataId: {
                in: Array.from(dictFoundReferences.keys())
              }
            }
          });

          userLibraries.forEach(ul => {
            const ref = dictFoundReferences.get(ul.cslDataId);
            if (ref) {
              dictFoundReferences.set(ref.id, { ...ref, inUserLibrary: true });
            }
          });
        }

        return Array.from(dictFoundReferences.values()).map(ref => {
          // Convert ref to DtoDoiMetadata
          return {
            inUserLibrary: ref.inUserLibrary || false,
            type: 'article',
            id: ref.id || '',
            DOI: ref.DOI || '',
            title: ref.title || '',
            URL: ref.URL || '',
          };
        });
      }),
    save: protectedProcedure
      .input(saveWebResultRequestInput)
      .mutation(async ({ input, ctx }) => {
        const convertNameVariable = (c: NameVariable) => ({
          given: c.given,
          family: c.family,
          literal: c.literal,
          nonDroppingParticle: c['non-dropping-particle'],
          droppingParticle: c['dropping-particle'],
          suffix: c.suffix,
          commaSuffix: c['comma-suffix'] ? `${c['comma-suffix']}` : undefined,
          parseNames: c['parse-names'] ? `${c['parse-names']}` : undefined,
          staticOrdering: c['static-ordering'] ? `${c['static-ordering']}` : undefined,
        }) as Prisma.NameVariableUncheckedCreateWithoutCslChairInput;

        const createData: Prisma.CSLDataCreateInput[] = input.results.map(result => ({
          id: `${result.doi_metadata.id}`,
          type: result.doi_metadata.type.replace('-', '_') as any,
          title: result.doi_metadata.title,
          DOI: result.doi_metadata.DOI,
          URL: result.doi_metadata.URL,
          abstract: result.doi_metadata.abstract,
          accessed: result.doi_metadata.accessed ? JSON.stringify(result.doi_metadata.accessed) : undefined,
          annote: result.doi_metadata.annote,
          archive: result.doi_metadata.archive,
          archiveCollection: result.doi_metadata.archive_collection,
          archiveLocation: result.doi_metadata.archive_location,
          authority: result.doi_metadata.authority,
          availableDate: result.doi_metadata['available-date'] as any,
          callNumber: result.doi_metadata['call-number'],
          chair: result.doi_metadata.chair ? {
            create: result.doi_metadata.chair.map(convertNameVariable),
          } : undefined,
          chapterNumber: result.doi_metadata['chapter-number'] ? `${result.doi_metadata['chapter-number']}` : undefined,
          citationKey: result.doi_metadata['citation-key'],
          citationLabel: result.doi_metadata['citation-label'],
          citationNumber: result.doi_metadata['citation-number'] ? `${result.doi_metadata['citation-number']}` : undefined,
          collectionEditor: result.doi_metadata['collection-editor'] ? {
            create: result.doi_metadata['collection-editor'].map(convertNameVariable),
          } : undefined,
          collectionNumber: result.doi_metadata['collection-number'] ? `${result.doi_metadata['collection-number']}` : undefined,
          collectionTitle: result.doi_metadata['collection-title'],
          compiler: result.doi_metadata.compiler ? {
            create: result.doi_metadata.compiler.map(convertNameVariable),
          } : undefined,
          composer: result.doi_metadata.composer ? {
            create: result.doi_metadata.composer.map(convertNameVariable),
          } : undefined,
          containerAuthor: result.doi_metadata['container-author'] ? {
            create: result.doi_metadata['container-author'].map(convertNameVariable),
          } : undefined,
          containerTitle: result.doi_metadata['container-title'],
          containerTitleShort: result.doi_metadata['container-title-short'],
          contributor: result.doi_metadata.contributor ? {
            create: result.doi_metadata.contributor.map(convertNameVariable),
          } : undefined,
          curator: result.doi_metadata.curator ? {
            create: result.doi_metadata.curator.map(convertNameVariable),
          } : undefined,
          custom: result.doi_metadata.custom ? JSON.stringify(result.doi_metadata.custom) : undefined,
          dimensions: result.doi_metadata.dimensions,
          director: result.doi_metadata.director ? {
            create: result.doi_metadata.director.map(convertNameVariable),
          } : undefined,
          division: result.doi_metadata.division,
          edition: result.doi_metadata.edition ? `${result.doi_metadata.edition}` : undefined,
          editor: result.doi_metadata.editor ? {
            create: result.doi_metadata.editor.map(convertNameVariable),
          } : undefined,
          editorialDirector: result.doi_metadata['editorial-director'] ? {
            create: result.doi_metadata['editorial-director'].map(convertNameVariable),
          } : undefined,
          event: result.doi_metadata.event,
          eventDate: result.doi_metadata['event-date'] as any,
          eventPlace: result.doi_metadata['event-place'],
          eventTitle: result.doi_metadata['event-title'],
          executiveProducer: result.doi_metadata['executive-producer'] ? {
            create: result.doi_metadata['executive-producer'].map(convertNameVariable),
          } : undefined,
          firstReferenceNoteNumber: result.doi_metadata['first-reference-note-number'] ? `${result.doi_metadata['first-reference-note-number']}` : undefined,
          genre: result.doi_metadata.genre,
          guest: result.doi_metadata.guest ? {
            create: result.doi_metadata.guest.map(convertNameVariable),
          } : undefined,
          host: result.doi_metadata.host ? {
            create: result.doi_metadata.host.map(convertNameVariable),
          } : undefined,
          illustrator: result.doi_metadata.illustrator ? {
            create: result.doi_metadata.illustrator.map(convertNameVariable),
          } : undefined,
          interviewer: result.doi_metadata.interviewer ? {
            create: result.doi_metadata.interviewer.map(convertNameVariable),
          } : undefined,
          ISBN: result.doi_metadata.ISBN,
          ISSN: result.doi_metadata.ISSN,
          issue: result.doi_metadata.issue ? `${result.doi_metadata.issue}` : undefined,
          issued: result.doi_metadata.issued as any,
          journalAbbreviation: result.doi_metadata.journalAbbreviation,
          jurisdiction: result.doi_metadata.jurisdiction,
          keyword: result.doi_metadata.keyword,
          archivePlace: result.doi_metadata['archive-place'],
          author: result.doi_metadata.author ? {
            create: result.doi_metadata.author.map(convertNameVariable),
          } : undefined,
          categories: result.doi_metadata.categories ? {
            set: result.doi_metadata.categories,
          } : undefined,
          language: result.doi_metadata.language,
          locator: result.doi_metadata.locator ? `${result.doi_metadata.locator}` : undefined,
          medium: result.doi_metadata.medium,
          narrator: result.doi_metadata.narrator ? {
            create: result.doi_metadata.narrator.map(convertNameVariable),
          } : undefined,
          note: result.doi_metadata.note,
          number: result.doi_metadata.number ? `${result.doi_metadata.number}` : undefined,
          numberOfPages: result.doi_metadata['number-of-pages'] ? `${result.doi_metadata['number-of-pages']}` : undefined,
          numberOfVolumes: result.doi_metadata['number-of-volumes'] ? `${result.doi_metadata['number-of-volumes']}` : undefined,
          organizer: result.doi_metadata.organizer ? {
            create: result.doi_metadata.organizer.map(convertNameVariable),
          } : undefined,
          originalAuthor: result.doi_metadata['original-author'] ? {
            create: result.doi_metadata['original-author'].map(convertNameVariable),
          } : undefined,
          originalDate: result.doi_metadata['original-date'] as any,
          originalPublisher: result.doi_metadata['original-publisher'],
          originalTitle: result.doi_metadata['original-title'],
          page: `${result.doi_metadata.page}`,
          pageFirst: result.doi_metadata['page-first'] ? `${result.doi_metadata['page-first']}` : undefined,
          originalPublisherPlace: result.doi_metadata['original-publisher-place'],
          part: result.doi_metadata.part ? `${result.doi_metadata.part}` : undefined,
          partTitle: result.doi_metadata['part-title'],
          performer: result.doi_metadata.performer ? {
            create: result.doi_metadata.performer.map(convertNameVariable),
          } : undefined,
          PMCID: result.doi_metadata.PMCID,
          PMID: result.doi_metadata.PMID,
          printing: result.doi_metadata.printing ? `${result.doi_metadata.printing}` : undefined,
          producer: result.doi_metadata.producer ? {
            create: result.doi_metadata.producer.map(convertNameVariable),
          } : undefined,
          publisher: result.doi_metadata.publisher,
          publisherPlace: result.doi_metadata['publisher-place'],
          recipient: result.doi_metadata.recipient ? {
            create: result.doi_metadata.recipient.map(convertNameVariable),
          } : undefined,
          references: result.doi_metadata.references,
          reviewedAuthor: result.doi_metadata['reviewed-author'] ? {
            create: result.doi_metadata['reviewed-author'].map(convertNameVariable),
          } : undefined,
          reviewedGenre: result.doi_metadata['reviewed-genre'],
          reviewedTitle: result.doi_metadata['reviewed-title'],
          scale: result.doi_metadata.scale,
          scriptWriter: result.doi_metadata['script-writer'] ? {
            create: result.doi_metadata['script-writer'].map(convertNameVariable),
          } : undefined,
          seriesCreator: result.doi_metadata['series-creator'] ? {
            create: result.doi_metadata['series-creator'].map(convertNameVariable),
          } : undefined,
          translator: result.doi_metadata.translator ? {
            create: result.doi_metadata.translator.map(convertNameVariable),
          } : undefined,
          section: result.doi_metadata.section,
          status: result.doi_metadata.status,
          submitted: result.doi_metadata.submitted as any,
          supplement: result.doi_metadata.supplement ? `${result.doi_metadata.supplement}` : undefined,
          titleShort: result.doi_metadata['title-short'],
          shortTitle: result.doi_metadata['shortTitle'],
          source: result.doi_metadata.source,
          version: result.doi_metadata.version,
          volume: result.doi_metadata.volume ? `${result.doi_metadata.volume}` : undefined,
          volumeTitle: result.doi_metadata['volume-title'],
          volumeTitleShort: result.doi_metadata['volume-title-short'],
          yearSuffix: result.doi_metadata['year-suffix'],
          attachments: result.doi_metadata.attachments ? {
            create: result.doi_metadata.attachments.map(att => ({
              url: att.url,
              title: att.title,
              mimeType: att.mimeType,
              hash: att.hash,
              content: att.content,
            })),
          } : undefined,
        }));

        try {
          const cslData = await Promise.all(
            createData.map(async (data) => {
              try {
                const id = data.id as string;
                const exists = await ctx.prisma.cSLData.findUnique({ where: { id } });
                if (!exists) {
                  return await ctx.prisma.cSLData.create({ data });
                } else {
                  return exists;
                }
              } catch (e) {
                console.error(`Failed to save CSLData for ID ${data.id}:`, e);
              }
            })
          );

          // Upsert cslData and connect to user's library if authenticated
          if (ctx.user) {
            await Promise.all(
              cslData.map(async (data) => {
                if (data) {
                  await ctx.prisma.userLibrary.upsert({
                    where: {
                      userId_cslDataId: {
                        userId: ctx.user!.id,
                        cslDataId: data.id,
                      },
                    },
                    update: {},
                    create: {
                      userId: ctx.user!.id,
                      cslDataId: data.id,
                    },
                  });
                }
              })
            );
          }
        } catch (error) {
          console.error("Error saving CSLData:", error);
          throw new Error('Failed to save reference data');
        }

        return { success: true };
      }),
    getAnnotations: t.procedure
      .input(z.object({ libraryId: z.number().int() }))
      .output(z.array(annotationSchema))
      .query(async () => { throw new Error('Not implemented'); }),
  }),

  attachments: t.router({
    checkExists: t.procedure
      .input(z.object({ hash: z.string() }))
      .query(async () => { throw new Error('Not implemented'); }),
    getPutPresignedUrl: t.procedure
      .input(z.object({ name: z.string(), mimeType: z.string() }))
      .query(async ({ input, ctx }) => {
        return ctx.s3.client.presignedPutObject(ctx.s3.bucketName, input.name, 60 * 60);
      }),
  }),
});

export type AppRouter = typeof appRouter;
