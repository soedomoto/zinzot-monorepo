// Translator: WIPO
// Target: ^https?://patentscope\.wipo\.int
// TODO: Implement WIPO translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wipo.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'WIPO',
      translatorType: 4,
      target: '^https?://patentscope\.wipo\.int',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2017-07-27 10:44:58',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
