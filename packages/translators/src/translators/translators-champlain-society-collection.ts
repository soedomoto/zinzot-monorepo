// Translator: Champlain Society - Collection
// Target: ^https?://link\.library\.utoronto\.ca
// TODO: Implement Champlain Society - Collection translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-champlain-society-collection.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Champlain Society - Collection',
      translatorType: 4,
      target: '^https?://link\.library\.utoronto\.ca',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-28 04:41:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
