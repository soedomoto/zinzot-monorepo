// Translator: National Library of Australia (new catalog)
// Target: ^https?://catalogue\.nla\.gov\.au
// TODO: Implement National Library of Australia (new catalog) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-library-of-australia-new-catalog.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Library of Australia (new catalog)',
      translatorType: 4,
      target: '^https?://catalogue\.nla\.gov\.au',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-08-02 21:35:50',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
