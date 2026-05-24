// Translator: Summon 2
// Target: ^https?://([^/]+\.)?summon\.serialssolutions\.com/
// TODO: Implement Summon 2 translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-summon-2.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Summon 2',
      translatorType: 4,
      target: '^https?://([^/]+\.)?summon\.serialssolutions\.com/',
      minVersion: '4.0',
      maxVersion: '',
      priority: 150,
      inRepository: true,
      browserSupport: 'gcsib',
      lastUpdated: '2021-07-20 21:07:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
