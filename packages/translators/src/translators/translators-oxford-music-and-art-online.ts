// Translator: Oxford Music and Art Online
// Target: ^https?://([^/]+\.)?www\.oxford(music|art)online\.com/
// TODO: Implement Oxford Music and Art Online translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-oxford-music-and-art-online.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Oxford Music and Art Online',
      translatorType: 4,
      target: '^https?://([^/]+\.)?www\.oxford(music|art)online\.com/',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2015-06-02 21:05:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
