// Translator: Rock, Paper, Shotgun
// Target: ^https?://(www\.)?rockpapershotgun\.(com|de)
// TODO: Implement Rock, Paper, Shotgun translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-rock-paper-shotgun.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Rock, Paper, Shotgun',
      translatorType: 4,
      target: '^https?://(www\.)?rockpapershotgun\.(com|de)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-15 21:00:12',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
