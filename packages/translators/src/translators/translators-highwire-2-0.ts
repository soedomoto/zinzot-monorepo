// Translator: HighWire 2.0
// Target: ^[^?#]+(/content/([0-9.]+[A-Z\-]*/|current|firstcite|early)|/search\?.*?\bsubmit=|/search(/results)?\?fulltext=|/cgi/collection/.|/search/.)
// TODO: Implement HighWire 2.0 translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-highwire-2-0.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'HighWire 2.0',
      translatorType: 4,
      target: '^[^?#]+(/content/([0-9.]+[A-Z\-]*/|current|firstcite|early)|/search\?.*?\bsubmit=|/search(/results)?\?fulltext=|/cgi/collection/.|/search/.)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-06-13 22:14:27',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
