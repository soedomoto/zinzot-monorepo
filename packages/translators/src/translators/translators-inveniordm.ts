// Translator: InvenioRDM
// Target: ^https?://(zenodo\.org|sandbox\.zenodo\.org|data\.caltech\.edu|repository\.tugraz\.at|researchdata\.tuwien\.at|ultraviolet\.library\.nyu\.edu|adc\.ei-basel\.hasdai\.org|fdat\.uni-tuebingen\.de|www\.fdr\.uni-hamburg\.de|rodare\.hzdr\.de|aperta\.ulakbim.gov\.tr|www\.openaccessrepository\.it|eic-zenodo\.sdcc\.bnl\.gov)
// TODO: Implement InvenioRDM translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-inveniordm.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'InvenioRDM',
      translatorType: 4,
      target: '^https?://(zenodo\.org|sandbox\.zenodo\.org|data\.caltech\.edu|repository\.tugraz\.at|researchdata\.tuwien\.at|ultraviolet\.library\.nyu\.edu|adc\.ei-basel\.hasdai\.org|fdat\.uni-tuebingen\.de|www\.fdr\.uni-hamburg\.de|rodare\.hzdr\.de|aperta\.ulakbim.gov\.tr|www\.openaccessrepository\.it|eic-zenodo\.sdcc\.bnl\.gov)',
      minVersion: '6.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-03-20 14:43:12',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
