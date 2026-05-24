// Translator: Publications Office of the European Union
// Target: ^https?://op\.europa\.eu/
// TODO: Implement Publications Office of the European Union translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-publications-office-of-the-european-union.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Publications Office of the European Union',
      translatorType: 4,
      target: '^https?://op\.europa\.eu/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-03-08 17:58:08',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
