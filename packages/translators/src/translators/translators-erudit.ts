// Translator: Erudit
// Target: ^https?://(www\.)?erudit\.org/
// TODO: Implement Erudit translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-erudit.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Erudit',
      translatorType: 4,
      target: '^https?://(www\.)?erudit\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-01-02 22:48:58',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
