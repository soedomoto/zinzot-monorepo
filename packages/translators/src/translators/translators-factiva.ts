// Translator: Factiva
// Target: ^https?://(global\.factiva\.com|[^/]*\bglobal-factiva-com\b[^/]+)/([gh]a|redir|np)/default\.aspx
// TODO: Implement Factiva translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-factiva.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Factiva',
      translatorType: 4,
      target: '^https?://(global\.factiva\.com|[^/]*\bglobal-factiva-com\b[^/]+)/([gh]a|redir|np)/default\.aspx',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsv',
      lastUpdated: '2015-02-13 21:54:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
