// Translator: Roll Call
// Target: ^https?://(www\.|blogs\.)?rollcall\.com
// TODO: Implement Roll Call translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-roll-call.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Roll Call',
      translatorType: 4,
      target: '^https?://(www\.|blogs\.)?rollcall\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-04 17:53:19',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
