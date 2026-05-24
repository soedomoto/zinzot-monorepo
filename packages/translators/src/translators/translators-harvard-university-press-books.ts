// Translator: Harvard University Press Books
// Target: https://www.hup.harvard.edu/(catalog.php|results-list.php)
// TODO: Implement Harvard University Press Books translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-harvard-university-press-books.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Harvard University Press Books',
      translatorType: 4,
      target: 'https://www.hup.harvard.edu/(catalog.php|results-list.php)',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-10-06 14:39:23',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
