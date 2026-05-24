// Translator: Patents - USPTO
// Target: ^https?://(patft|appft1)\.uspto\.gov/netacgi/nph-Parser.+
// TODO: Implement Patents - USPTO translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-patents-uspto.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Patents - USPTO',
      translatorType: 4,
      target: '^https?://(patft|appft1)\.uspto\.gov/netacgi/nph-Parser.+',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2014-04-04 10:11:27',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
