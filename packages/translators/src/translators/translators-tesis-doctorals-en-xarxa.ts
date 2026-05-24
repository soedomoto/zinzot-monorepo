// Translator: Tesis Doctorals en Xarxa
// Target: ^https?://(www\.)?(tdx\.cat|tesisenred\.net)
// TODO: Implement Tesis Doctorals en Xarxa translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-tesis-doctorals-en-xarxa.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Tesis Doctorals en Xarxa',
      translatorType: 4,
      target: '^https?://(www\.)?(tdx\.cat|tesisenred\.net)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-03-11 20:42:11',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
