// Translator: artnet
// Target: https?://(www\.)?artnet\.com/
// TODO: Implement artnet translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-artnet.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'artnet',
      translatorType: 4,
      target: 'https?://(www\.)?artnet\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-20 15:14:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
