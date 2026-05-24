// Translator: Common-Place
// Target: ^https?://(www\.)?(common-place\.org/|common-place-archives\.org/)
// TODO: Implement Common-Place translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-common-place.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Common-Place',
      translatorType: 4,
      target: '^https?://(www\.)?(common-place\.org/|common-place-archives\.org/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-09-10 09:34:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
