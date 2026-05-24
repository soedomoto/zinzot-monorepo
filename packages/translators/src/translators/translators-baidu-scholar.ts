// Translator: Baidu Scholar
// Target: ^https?://(www\.)?xueshu\.baidu\.com/
// TODO: Implement Baidu Scholar translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-baidu-scholar.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Baidu Scholar',
      translatorType: 4,
      target: '^https?://(www\.)?xueshu\.baidu\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-16 17:43:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
