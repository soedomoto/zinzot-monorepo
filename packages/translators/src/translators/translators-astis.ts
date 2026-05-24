// Translator: ASTIS
// Target: ^https?://(www\.)?aina\.ucalgary\.ca/
// TODO: Implement ASTIS translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-astis.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ASTIS',
      translatorType: 4,
      target: '^https?://(www\.)?aina\.ucalgary\.ca/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-04 19:44:55',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
