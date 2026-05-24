// Translator: Education Week
// Target: ^https?://(www2?\.|blogs\.)?edweek\.org/
// TODO: Implement Education Week translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-education-week.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Education Week',
      translatorType: 4,
      target: '^https?://(www2?\.|blogs\.)?edweek\.org/',
      minVersion: '1.0.0b4.r1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-01-29 15:47:14',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
