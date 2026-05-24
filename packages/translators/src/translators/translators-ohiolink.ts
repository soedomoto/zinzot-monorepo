// Translator: OhioLINK
// Target: ^https?://journals\.ohiolink\.edu/ejc/article\.cgi\?
// TODO: Implement OhioLINK translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ohiolink.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OhioLINK',
      translatorType: 4,
      target: '^https?://journals\.ohiolink\.edu/ejc/article\.cgi\?',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcs',
      lastUpdated: '2017-01-01 15:28:48',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
