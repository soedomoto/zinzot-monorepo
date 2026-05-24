import * as z from "zod";
import { CSLDataSchema } from "./csl-data.js";

export const LabelSchema = z.enum([
    "act",
    "appendix",
    "article-locator",
    "book",
    "canon",
    "chapter",
    "column",
    "elocation",
    "equation",
    "figure",
    "folio",
    "issue",
    "line",
    "note",
    "opus",
    "page",
    "paragraph",
    "part",
    "rule",
    "scene",
    "section",
    "sub-verbo",
    "supplement",
    "table",
    "timestamp",
    "title-locator",
    "verse",
    "version",
    "volume",
]);
export type Label = z.infer<typeof LabelSchema>;


export const SchemaSchema = z.enum([
    "https://resource.citationstyles.org/schema/latest/input/json/csl-citation.json",
]);
export type Schema = z.infer<typeof SchemaSchema>;

export const CitationItemSchema = z.object({
    "author-only": z.union([z.boolean(), z.number(), z.string()]).optional(),
    "id": z.union([z.number(), z.string()]),
    "itemData": CSLDataSchema.optional(),
    "label": LabelSchema.optional(),
    "locator": z.string().optional(),
    "prefix": z.string().optional(),
    "suffix": z.string().optional(),
    "suppress-author": z.union([z.boolean(), z.number(), z.string()]).optional(),
    "uris": z.array(z.string()).optional(),
});
export type CitationItem = z.infer<typeof CitationItemSchema>;

export const PropertiesSchema = z.object({
    "noteIndex": z.number().optional(),
});
export type Properties = z.infer<typeof PropertiesSchema>;

export const CSLCitationSchema = z.object({
    "citationID": z.union([z.number(), z.string()]),
    "citationItems": z.array(CitationItemSchema).optional(),
    "properties": PropertiesSchema.optional(),
    "schema": SchemaSchema,
});
export type CSLCitation = z.infer<typeof CSLCitationSchema>;
