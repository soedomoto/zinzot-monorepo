// Translator: La República (Peru)
// Target: ^https?://larepublica\.pe/
// TODO: Implement La República (Peru) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-la-rep-blica-peru.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'La República (Peru)',
      translatorType: 4,
      target: '^https?://larepublica\.pe/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-07-14 18:50:45',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
