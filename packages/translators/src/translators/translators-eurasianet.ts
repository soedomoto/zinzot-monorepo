// Translator: EurasiaNet
// Target: ^https?://www\.eurasianet\.org/
// TODO: Implement EurasiaNet translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-eurasianet.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'EurasiaNet',
      translatorType: 4,
      target: '^https?://www\.eurasianet\.org/',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2016-11-01 18:32:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
