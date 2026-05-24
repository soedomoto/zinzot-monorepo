// Translator: Airiti
// Target: ^https?://([^/]+\.)?airitilibrary\.com/Publication/alDetailedMesh
// TODO: Implement Airiti translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-airiti.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Airiti',
      translatorType: 4,
      target: '^https?://([^/]+\.)?airitilibrary\.com/Publication/alDetailedMesh',
      minVersion: '3.0',
      maxVersion: '',
      priority: 110,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-08-04 05:04:16',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
