// Translator: OSTI Energy Citations
// Target: ^https?://www\.osti\.gov/(energycitations|scitech)
// TODO: Implement OSTI Energy Citations translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-osti-energy-citations.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OSTI Energy Citations',
      translatorType: 4,
      target: '^https?://www\.osti\.gov/(energycitations|scitech)',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-07-27 10:41:29',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
