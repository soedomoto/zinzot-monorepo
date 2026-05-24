// Translator: DABI
// Target: ^https?://dabi\.ib\.hu-berlin\.de/
// TODO: Implement DABI translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dabi.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'DABI',
      translatorType: 4,
      target: '^https?://dabi\.ib\.hu-berlin\.de/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-10 18:58:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
