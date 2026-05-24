// Translator: IngentaConnect
// Target: ^https?://(www\.)?ingentaconnect\.com
// TODO: Implement IngentaConnect translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ingentaconnect.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'IngentaConnect',
      translatorType: 4,
      target: '^https?://(www\.)?ingentaconnect\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-07-12 05:41:32',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
