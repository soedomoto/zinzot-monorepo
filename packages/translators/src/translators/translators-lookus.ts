// Translator: LookUs
// Target: /jvi.aspx[^#]*[?&](volume|issue|un)=
// TODO: Implement LookUs translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-lookus.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'LookUs',
      translatorType: 4,
      target: '/jvi.aspx[^#]*[?&](volume|issue|un)=',
      minVersion: '3.0',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-14 19:35:09',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
