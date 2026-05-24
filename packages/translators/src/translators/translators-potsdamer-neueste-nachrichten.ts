// Translator: Potsdamer Neueste Nachrichten
// Target: ^https?://www\.pnn\.de
// TODO: Implement Potsdamer Neueste Nachrichten translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-potsdamer-neueste-nachrichten.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Potsdamer Neueste Nachrichten',
      translatorType: 4,
      target: '^https?://www\.pnn\.de',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2014-04-06 16:15:15',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
