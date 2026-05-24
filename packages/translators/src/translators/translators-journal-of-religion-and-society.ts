// Translator: Journal of Religion and Society
// Target: ^https?://(www\.)?moses\.creighton\.edu/JRS
// TODO: Implement Journal of Religion and Society translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-journal-of-religion-and-society.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Journal of Religion and Society',
      translatorType: 4,
      target: '^https?://(www\.)?moses\.creighton\.edu/JRS',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-14 20:06:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
