// Translator: informIT database
// Target: ^https?://www\.informit\.com
// TODO: Implement informIT database translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-informit-database.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'informIT database',
      translatorType: 4,
      target: '^https?://www\.informit\.com',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2012-10-15 10:37:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
