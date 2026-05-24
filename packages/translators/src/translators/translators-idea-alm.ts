// Translator: IDEA ALM
// Target: /((notebook(_f?ext)?)|list)\.asp
// TODO: Implement IDEA ALM translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-idea-alm.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'IDEA ALM',
      translatorType: 4,
      target: '/((notebook(_f?ext)?)|list)\.asp',
      minVersion: '3.0',
      maxVersion: '',
      priority: 200,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-22 23:39:19',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
