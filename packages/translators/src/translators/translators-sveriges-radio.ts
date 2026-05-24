// Translator: Sveriges radio
// Target: ^https?://sverigesradio\.se/(artikel|sok\?)
// TODO: Implement Sveriges radio translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-sveriges-radio.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Sveriges radio',
      translatorType: 4,
      target: '^https?://sverigesradio\.se/(artikel|sok\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-11 19:10:14',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
