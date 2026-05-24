// Translator: BBC
// Target: ^https?://(www|news?)\.bbc\.(co\.uk|com)
// TODO: Implement BBC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bbc.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'BBC',
      translatorType: 4,
      target: '^https?://(www|news?)\.bbc\.(co\.uk|com)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-06-10 21:51:43',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
