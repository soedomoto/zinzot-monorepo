// Translator: Public Record Office Victoria
// Target: ^https?://prov\.vic\.gov\.au/(archive|search_journey)/
// TODO: Implement Public Record Office Victoria translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-public-record-office-victoria.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Public Record Office Victoria',
      translatorType: 4,
      target: '^https?://prov\.vic\.gov\.au/(archive|search_journey)/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-08-21 19:55:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
