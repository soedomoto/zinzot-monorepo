// Translator: DAI-Zenon
// Target: ^https?://zenon\.dainst\.org/(Record/|Search/)
// TODO: Implement DAI-Zenon translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dai-zenon.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'DAI-Zenon',
      translatorType: 4,
      target: '^https?://zenon\.dainst\.org/(Record/|Search/)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2020-10-13 15:24:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
