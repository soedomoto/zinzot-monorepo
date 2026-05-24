// Translator: PEI Archival Information Network
// Target: ^https?://www\.archives\.pe\.ca/atom/index\.php/
// TODO: Implement PEI Archival Information Network translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-pei-archival-information-network.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PEI Archival Information Network',
      translatorType: 4,
      target: '^https?://www\.archives\.pe\.ca/atom/index\.php/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-22 15:45:20',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
