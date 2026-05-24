import { appRouter } from '@zinzot/contracts';


// const t = initTRPC.context<Context>().create();

// export const implementedRouter = t.router({
//   // Auth endpoints (migrated from auth.py)
//   auth: t.router({
//     google: t.procedure
//       .input(authGoogleSchema)
//       .mutation(async ({ input, ctx }) => {
//         // Authenticate with Google / Firebase
//         // Find or create user
//         const user = await ctx.prisma.user.upsert({
//           where: { email: 'user@example.com' }, // Mocked extraction from token
//           update: {},
//           create: { email: 'user@example.com', name: 'Google User' }
//         });
//         const session = await ctx.prisma.userSession.create({
//           data: {
//             userId: user.id,
//             token: `token_${Date.now()}`,
//             expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
//           }
//         });
//         return { token: session.token, user };
//       }),
//     me: t.procedure
//       .query(async ({ ctx }) => {
//         // Get user from context
//         return { id: 1, email: 'user@example.com' };
//       }),
//     logout: t.procedure
//       .mutation(async ({ ctx }) => {
//         return { success: true };
//       })
//   }),

//   // Collections endpoints (migrated from collections.py)
//   collections: t.router({
//     list: t.procedure
//       .output(z.array(collectionSchema))
//       .query(async ({ ctx }) => {
//         return ctx.prisma.userCollection.findMany();
//       }),
//     create: t.procedure
//       .input(createCollectionSchema)
//       .output(collectionSchema)
//       .mutation(async ({ input, ctx }) => {
//         return ctx.prisma.userCollection.create({
//           data: {
//             userId: 1, // Mocked user block
//             name: input.name,
//             description: input.description,
//             color: input.color,
//             parentId: input.parentId,
//           },
//         });
//       }),
//     update: t.procedure
//       .input(updateCollectionSchema)
//       .output(collectionSchema)
//       .mutation(async ({ input, ctx }) => {
//         return ctx.prisma.userCollection.update({
//           where: { id: input.id },
//           data: {
//             name: input.name,
//             description: input.description,
//             color: input.color,
//           }
//         });
//       }),
//     delete: t.procedure
//       .input(z.object({ id: z.number().int() }))
//       .mutation(async ({ input, ctx }) => {
//         await ctx.prisma.userCollection.delete({ where: { id: input.id } });
//         return { success: true };
//       }),
//   }),

//   // User Library endpoints (migrated from user_library.py)
//   library: t.router({
//     list: t.procedure
//       .output(z.array(userLibrarySchema))
//       .query(async ({ ctx }) => {
//         return ctx.prisma.userLibrary.findMany();
//       }),
//     delete: t.procedure
//       .input(z.object({ id: z.number().int() }))
//       .mutation(async ({ input, ctx }) => {
//         await ctx.prisma.userLibrary.delete({ where: { id: input.id } });
//         return { success: true };
//       }),
//   }),

//   // References and Annotations endpoints (migrated from references.py)
//   references: t.router({
//     checkExists: t.procedure
//       .input(z.object({ doi: z.string() }))
//       .query(async ({ input, ctx }) => {
//         const metadata = await ctx.prisma.doiMetadata.findFirst({ where: { doi: input.doi } });
//         return { exists: !!metadata, id: metadata?.id };
//       }),
//     getAnnotations: t.procedure
//       .input(z.object({ libraryId: z.number().int() }))
//       .output(z.array(annotationSchema))
//       .query(async ({ input, ctx }) => {
//         return ctx.prisma.userLibraryAnnotation.findMany({
//           where: { userLibraryId: input.libraryId }
//         });
//       }),
//   }),

//   // Attachments endpoints (migrated from attachments.py)
//   attachments: t.router({
//     checkExists: t.procedure
//       .input(z.object({ hash: z.string() }))
//       .query(async ({ input, ctx }) => {
//         const attachment = await ctx.prisma.doiAttachment.findFirst({ where: { hash: input.hash } });
//         return { exists: !!attachment, id: attachment?.id };
//       }),
//   }),
// });

export const implementedRouter = appRouter;
export type AppRouter = typeof implementedRouter;
