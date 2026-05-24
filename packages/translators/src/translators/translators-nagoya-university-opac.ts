// Translator: Nagoya University OPAC
// Target: ^https?://opac\.nul\.nagoya-u\.ac\.jp/webopac/(catdbl\.do|ctlsrh\.do)
// TODO: Implement Nagoya University OPAC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-nagoya-university-opac.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Nagoya University OPAC',
      translatorType: 4,
      target: '^https?://opac\.nul\.nagoya-u\.ac\.jp/webopac/(catdbl\.do|ctlsrh\.do)',
      minVersion: '2.0b7',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-28 04:47:51',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
