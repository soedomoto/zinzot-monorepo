// Translator: Ab Imperio
// Target: ^https?://(www\.)?abimperio\.net/
// TODO: Implement Ab Imperio translator
import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export default defineUnlistedScript(() => {
  console.log("Hello from translators-ab-imperio.ts");
});

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Ab Imperio',
      translatorType: 4,
      target: '^https?://(www\.)?abimperio\.net/',
      minVersion: '2.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcs',
      lastUpdated: '2013-02-28 14:52:44',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
