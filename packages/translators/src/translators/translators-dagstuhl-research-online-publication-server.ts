// Translator: Dagstuhl Research Online Publication Server
// Target: ^https?://(www\.)?drops\.dagstuhl\.de/
// TODO: Implement Dagstuhl Research Online Publication Server translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dagstuhl-research-online-publication-server.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Dagstuhl Research Online Publication Server',
      translatorType: 4,
      target: '^https?://(www\.)?drops\.dagstuhl\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-12-03 20:10:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
