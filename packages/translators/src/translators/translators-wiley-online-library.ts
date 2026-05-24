// Translator: Wiley Online Library
// Target: ^https?://([\w-]+\.)?onlinelibrary\.wiley\.com[^/]*/(book|doi|toc|advanced/search|search-web/cochrane|cochranelibrary/search|o/cochrane/(clcentral|cldare|clcmr|clhta|cleed|clabout)/articles/.+/sect0\.html)
// TODO: Implement Wiley Online Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wiley-online-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wiley Online Library',
      translatorType: 4,
      target: '^https?://([\w-]+\.)?onlinelibrary\.wiley\.com[^/]*/(book|doi|toc|advanced/search|search-web/cochrane|cochranelibrary/search|o/cochrane/(clcentral|cldare|clcmr|clhta|cleed|clabout)/articles/.+/sect0\.html)',
      minVersion: '3.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-01-17 18:34:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
