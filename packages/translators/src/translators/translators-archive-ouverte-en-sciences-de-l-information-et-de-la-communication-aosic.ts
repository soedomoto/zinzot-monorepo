// Translator: Archive Ouverte en Sciences de l'Information et de la Communication  (AOSIC)
// Target: ^https?://archivesic\.ccsd\.cnrs\.fr/
// TODO: Implement Archive Ouverte en Sciences de l'Information et de la Communication  (AOSIC) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-archive-ouverte-en-sciences-de-l-information-et-de-la-communication-aosic.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Archive Ouverte en Sciences de l\'Information et de la Communication  (AOSIC)',
      translatorType: 4,
      target: '^https?://archivesic\.ccsd\.cnrs\.fr/',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-27 20:43:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
