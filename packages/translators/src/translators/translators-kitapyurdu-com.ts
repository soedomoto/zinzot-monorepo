// Translator: KitapYurdu.com
// Target: ^https?://www\.kitapyurdu\.com/
// TODO: Implement KitapYurdu.com translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-kitapyurdu-com.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'KitapYurdu.com',
      translatorType: 4,
      target: '^https?://www\.kitapyurdu\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-02-08 18:18:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
