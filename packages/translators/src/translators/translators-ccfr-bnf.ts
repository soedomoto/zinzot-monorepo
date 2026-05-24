// Translator: CCfr (BnF)
// Target: ^https?://ccfr\.bnf\.fr/portailccfr/.*\b(action=search|menu=menu_view_grappage|search\.jsp)\b
// TODO: Implement CCfr (BnF) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ccfr-bnf.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'CCfr (BnF)',
      translatorType: 4,
      target: '^https?://ccfr\.bnf\.fr/portailccfr/.*\b(action=search|menu=menu_view_grappage|search\.jsp)\b',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'g',
      lastUpdated: '2014-09-18 14:08:05',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
