// Translator: Dagens Nyheter
// Target: ^https?://www\.dn\.se/(nyheter|ekonomi|kultur-noje|sport|sok)/
// TODO: Implement Dagens Nyheter translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dagens-nyheter.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Dagens Nyheter',
      translatorType: 4,
      target: '^https?://www\.dn\.se/(nyheter|ekonomi|kultur-noje|sport|sok)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-07-19 12:35:38',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
