// Translator: JISC Historical Texts
// Target: ^https?://(data\.)?[^/]*historicaltexts\.jisc\.ac\.uk/(view|results)\?
// TODO: Implement JISC Historical Texts translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-jisc-historical-texts.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'JISC Historical Texts',
      translatorType: 4,
      target: '^https?://(data\.)?[^/]*historicaltexts\.jisc\.ac\.uk/(view|results)\?',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-07 16:45:40',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
