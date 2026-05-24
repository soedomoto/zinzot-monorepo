// Translator: The Times and Sunday Times
// Target: ^https?://www\.thetimes\.co\.uk/
// TODO: Implement The Times and Sunday Times translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-times-and-sunday-times.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Times and Sunday Times',
      translatorType: 4,
      target: '^https?://www\.thetimes\.co\.uk/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-06-10 22:58:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
