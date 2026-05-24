// Translator: scinapse
// Target: ^https?://(www\.)?scinapse\.io/
// TODO: Implement scinapse translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-scinapse.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'scinapse',
      translatorType: 4,
      target: '^https?://(www\.)?scinapse\.io/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-14 21:01:40',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
