// Translator: Flickr
// Target: ^https?://(www\.)?flickr\.com/
// TODO: Implement Flickr translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-flickr.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Flickr',
      translatorType: 4,
      target: '^https?://(www\.)?flickr\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2016-09-20 06:21:01',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
