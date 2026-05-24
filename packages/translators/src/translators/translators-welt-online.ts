// Translator: Welt Online
// Target: ^https?://www\.welt\.de
// TODO: Implement Welt Online translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-welt-online.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Welt Online',
      translatorType: 4,
      target: '^https?://www\.welt\.de',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-06-11 13:27:17',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
