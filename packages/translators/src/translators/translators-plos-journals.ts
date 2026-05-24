// Translator: PLoS Journals
// Target: ^https?://(www\.plos(one|ntds|compbiol|pathogens|genetics|medicine|biology)\.org|journals\.plos\.org(/\w+)?)/(search|\w+/article)
// TODO: Implement PLoS Journals translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-plos-journals.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'PLoS Journals',
      translatorType: 4,
      target: '^https?://(www\.plos(one|ntds|compbiol|pathogens|genetics|medicine|biology)\.org|journals\.plos\.org(/\w+)?)/(search|\w+/article)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-22 19:28:36',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
