// Translator: NTSB Accident Reports
// Target: ^https?://(www\.)?ntsb\.gov/investigations/AccidentReports/Pages/
// TODO: Implement NTSB Accident Reports translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ntsb-accident-reports.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NTSB Accident Reports',
      translatorType: 4,
      target: '^https?://(www\.)?ntsb\.gov/investigations/AccidentReports/Pages/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-26 18:39:23',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
