// Translator: Store norske leksikon
// Target: ^https?://((sml|nbl|nkl)\.)?snl\.no/[^.]
// TODO: Implement Store norske leksikon translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-store-norske-leksikon.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Store norske leksikon',
      translatorType: 4,
      target: '^https?://((sml|nbl|nkl)\.)?snl\.no/[^.]',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-24 20:57:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
