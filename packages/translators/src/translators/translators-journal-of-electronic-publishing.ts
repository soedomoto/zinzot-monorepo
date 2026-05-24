// Translator: Journal of Electronic Publishing
// Target: ^https?://quod\.lib\.umich\.edu/j/jep
// TODO: Implement Journal of Electronic Publishing translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-journal-of-electronic-publishing.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Journal of Electronic Publishing',
      translatorType: 4,
      target: '^https?://quod\.lib\.umich\.edu/j/jep',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-01-31 20:16:13',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
