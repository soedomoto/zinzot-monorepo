// Translator: Wanfang Data
// Target: ^https?://[ds]\.(g\.)?wanfangdata\.com\.cn
// TODO: Implement Wanfang Data translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wanfang-data.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Wanfang Data',
      translatorType: 4,
      target: '^https?://[ds]\.(g\.)?wanfangdata\.com\.cn',
      minVersion: '2.0rc1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcs',
      lastUpdated: '2019-06-10 22:46:01',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
