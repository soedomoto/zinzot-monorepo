// Translator: EUR-Lex
// Target: ^https?://(www\.)?eur-lex\.europa\.eu/(legal-content/[A-Z][A-Z]/(TXT|ALL)/|search\.html\?)
// TODO: Implement EUR-Lex translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-eur-lex.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'EUR-Lex',
      translatorType: 4,
      target: '^https?://(www\.)?eur-lex\.europa\.eu/(legal-content/[A-Z][A-Z]/(TXT|ALL)/|search\.html\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-31 02:00:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
