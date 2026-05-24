// Translator: Safari Books Online
// Target: ^https?://([^/]+\.)?safaribooksonline\.[a-zA-Z]+/
// TODO: Implement Safari Books Online translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-safari-books-online.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Safari Books Online',
      translatorType: 4,
      target: '^https?://([^/]+\.)?safaribooksonline\.[a-zA-Z]+/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 150,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-24 09:40:05',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
