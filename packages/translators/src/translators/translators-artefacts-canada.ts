// Translator: Artefacts Canada
// Target: ^https?://(www\.)?pro\.rcip-chin\.gc\.ca
// TODO: Implement Artefacts Canada translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-artefacts-canada.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Artefacts Canada',
      translatorType: 4,
      target: '^https?://(www\.)?pro\.rcip-chin\.gc\.ca',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2013-09-16 00:25:18',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
