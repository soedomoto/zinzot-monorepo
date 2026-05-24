// Translator: CiteSeer
// Target: ^https?://citeseerx?\.ist\.psu\.edu
// TODO: Implement CiteSeer translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-citeseer.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CiteSeer',
      translatorType: 4,
      target: '^https?://citeseerx?\.ist\.psu\.edu',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-01-28 16:31:16',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
