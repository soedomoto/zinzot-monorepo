// Translator: PubPub
// Target: /pub/[^/]+/release/\d+|^https?://[^/]+\.pubpub\.org/search\?
// TODO: Implement PubPub translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pubpub.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PubPub',
      translatorType: 4,
      target: '/pub/[^/]+/release/\d+|^https?://[^/]+\.pubpub\.org/search\?',
      minVersion: '3.0',
      maxVersion: '',
      priority: 270,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-14 20:35:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
