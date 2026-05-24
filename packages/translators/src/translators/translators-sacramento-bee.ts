// Translator: Sacramento Bee
// Target: ^https?://(www\.)?sacbee\.com
// TODO: Implement Sacramento Bee translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sacramento-bee.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Sacramento Bee',
      translatorType: 4,
      target: '^https?://(www\.)?sacbee\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-07-09 05:05:18',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
