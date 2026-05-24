// Translator: Inside Higher Ed
// Target: ^https?://www\.insidehighered\.com
// TODO: Implement Inside Higher Ed translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-inside-higher-ed.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Inside Higher Ed',
      translatorType: 4,
      target: '^https?://www\.insidehighered\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-10-11 01:45:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
