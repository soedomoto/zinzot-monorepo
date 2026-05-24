import { z } from 'zod';
import { CSLDataSchema } from './csl-data.js';

export const DtoDoiAttachmentSchema = z.object({
  url: z.string().nullable().optional(),
  title: z.string().nullable().optional(),
  mimeType: z.string().nullable().optional(),
  hash: z.string().nullable().optional(),
  content: z.string().nullable().optional(),
});
export type DtoDoiAttachment = z.infer<typeof DtoDoiAttachmentSchema>;

export const DtoDoiMetadataSchema = CSLDataSchema.extend({
  attachments: z.array(DtoDoiAttachmentSchema).nullable().optional(),
});

export type DtoDoiMetadata = z.infer<typeof DtoDoiMetadataSchema>;
