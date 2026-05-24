// Translator: WikiLeaks PlusD
// Target: ^https?://(search\.|www\.)?wikileaks\.org/plusd/
// TODO: Implement WikiLeaks PlusD translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-wikileaks-plusd.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'WikiLeaks PlusD',
      translatorType: 4,
      target: '^https?://(search\.|www\.)?wikileaks\.org/plusd/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-17 20:49:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
