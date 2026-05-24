// Translator: National Transportation Library ROSA P
// Target: ^https?://rosap\.ntl\.bts\.gov/
// TODO: Implement National Transportation Library ROSA P translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-national-transportation-library-rosa-p.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'National Transportation Library ROSA P',
      translatorType: 4,
      target: '^https?://rosap\.ntl\.bts\.gov/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-11 21:32:59',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
