// Translator: National Post
// Target: ^https://(www\.)?(national|financial)post\.com/
// TODO: Implement National Post translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-post.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Post',
      translatorType: 4,
      target: '^https://(www\.)?(national|financial)post\.com/',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-12 02:31:11',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
