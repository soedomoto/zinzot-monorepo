// Translator: Library Catalog (Blacklight)
// Target: ^https?://(catalog\.libraries\.psu|clio\.columbia|searchworks\.stanford|search\.library\.brown)\.edu/(view|catalog|\?search)
// TODO: Implement Library Catalog (Blacklight) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-blacklight.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (Blacklight)',
      translatorType: 4,
      target: '^https?://(catalog\.libraries\.psu|clio\.columbia|searchworks\.stanford|search\.library\.brown)\.edu/(view|catalog|\?search)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2020-11-03 01:34:52',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
