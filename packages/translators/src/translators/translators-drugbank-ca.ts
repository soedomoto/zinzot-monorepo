// Translator: DrugBank.ca
// Target: ^https?://(www\.)?drugbank\.ca/drugs/
// TODO: Implement DrugBank.ca translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-drugbank-ca.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'DrugBank.ca',
      translatorType: 4,
      target: '^https?://(www\.)?drugbank\.ca/drugs/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-01 16:52:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
