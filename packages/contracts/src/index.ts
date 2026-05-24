import { z } from 'zod';
export type { DtoDoiMetadata } from './dtos.js';
export * from './csl-citation.js';
export * from './csl-data.js';
import { initTRPC } from '@trpc/server';
import { Context } from './context.js';
import { CSLData, Prisma } from '@zinzot/db';
import { type NameVariable } from './csl-data.js'
import { DtoDoiMetadataSchema, DtoDoiMetadata } from './dtos.js';

// Schemas matching the new Prisma models based on FastAPI models

// Auth DTOs
export const authGoogleSchema = z.object({
  idToken: z.string(),
});

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
  inUserLibrary: z.boolean(),
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

export const appRouter = t.router({
  auth: t.router({
    google: t.procedure
      .input(authGoogleSchema)
      .mutation(async ({ ctx }) => {
        // // Authenticate with Google / Firebase
        // // Find or create user
        // const user = await ctx.prisma.user.upsert({
        //   where: { email: 'user@example.com' }, // Mocked extraction from token
        //   update: {},
        //   create: { email: 'user@example.com', name: 'Google User' }
        // });
        // const session = await ctx.prisma.userSession.create({
        //   data: {
        //     userId: user.id,
        //     token: `token_${Date.now()}`,
        //     expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
        //   }
        // });
        // return { token: session.token, user };
        throw new Error('Not implemented');
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
    checkExists: t.procedure
      .input(checkExistsInput)
      .output(userDoiMetadata.array())
      .mutation(async ({ input, ctx }) => {
        const dictFoundReferences = new Map<string, CSLData>();

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

        const foundReferences = Array.from(dictFoundReferences.values()).map(ref => ({
          ...ref,
          inUserLibrary: false
        }));

        // Context user check (assuming ctx.user could be passed)
        const user = (ctx as any).user;
        // if (user) {
        //   const userLibraries = await ctx.prisma.userLibrary.findMany({
        //     where: {
        //       userId: user.id,
        //       cSLDataId: {
        //         in: foundReferences.map(ref => ref.id)
        //       }
        //     }
        //   });

        //   foundReferences.forEach(ref => {
        //     if (userLibraries.some(ul => ul.cSLDataId === ref.id)) {
        //       ref.inUserLibrary = true;
        //     }
        //   });
        // }

        return foundReferences.map(ref => {
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
    save: t.procedure
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
          await Promise.all(
            createData.map(async (data) => {
               try {
                 const id = data.id as string;
                 const exists = await ctx.prisma.cSLData.findUnique({ where: { id } });
                 if (!exists) {
                   await ctx.prisma.cSLData.create({ data });
                 }
               } catch (e) {
                 console.error(`Failed to save CSLData for ID ${data.id}:`, e);
               }
            })
          );
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
  }),
});

export type AppRouter = typeof appRouter;
