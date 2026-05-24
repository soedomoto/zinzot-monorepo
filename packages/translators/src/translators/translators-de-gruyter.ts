// Translator: De Gruyter
// Target: ^https?://www\.degruyter\.com/
// TODO: Implement De Gruyter translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-de-gruyter.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'De Gruyter',
      translatorType: 4,
      target: '^https?://www\.degruyter\.com/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-08-12 21:50:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
