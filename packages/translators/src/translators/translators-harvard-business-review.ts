// Translator: Harvard Business Review
// Target: ^https?://(www\.)?hbr\.org/
// TODO: Implement Harvard Business Review translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-harvard-business-review.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Harvard Business Review',
      translatorType: 4,
      target: '^https?://(www\.)?hbr\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-10-11 17:02:23',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
