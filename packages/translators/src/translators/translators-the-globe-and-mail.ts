// Translator: The Globe and Mail
// Target: ^https?://www\.theglobeandmail\.com/
// TODO: Implement The Globe and Mail translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-globe-and-mail.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Globe and Mail',
      translatorType: 4,
      target: '^https?://www\.theglobeandmail\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-14 21:43:14',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
