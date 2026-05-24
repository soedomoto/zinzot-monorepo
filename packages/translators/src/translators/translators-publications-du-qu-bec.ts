// Translator: Publications du Québec
// Target: ^https?://(www\.)?legisquebec\.gouv\.qc\.ca/
// TODO: Implement Publications du Québec translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-publications-du-qu-bec.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Publications du Québec',
      translatorType: 4,
      target: '^https?://(www\.)?legisquebec\.gouv\.qc\.ca/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-03 15:38:52',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
