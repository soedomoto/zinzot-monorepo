// Translator: eLife
// Target: ^https?://(elife\.)?elifesciences\.org/(articles|search|subjects|archive)
// TODO: Implement eLife translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-elife.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'eLife',
      translatorType: 4,
      target: '^https?://(elife\.)?elifesciences\.org/(articles|search|subjects|archive)',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-03-05 10:52:52',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
