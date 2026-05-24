// Translator: ESpacenet
// Target: ^https?://(worldwide|[a-z][a-z])\.espacenet\.com/
// TODO: Implement ESpacenet translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-espacenet.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ESpacenet',
      translatorType: 4,
      target: '^https?://(worldwide|[a-z][a-z])\.espacenet\.com/',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-06 19:45:27',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
