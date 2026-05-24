// Translator: DEPATISnet
// Target: ^https?://depatisnet\.dpma\.de/DepatisNet/depatisnet
// TODO: Implement DEPATISnet translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-depatisnet.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'DEPATISnet',
      translatorType: 4,
      target: '^https?://depatisnet\.dpma\.de/DepatisNet/depatisnet',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-12-07 20:44:27',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
