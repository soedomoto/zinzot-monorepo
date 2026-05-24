// Translator: Homeland Security Digital Library
// Target: ^https?://www\.hsdl\.org/
// TODO: Implement Homeland Security Digital Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-homeland-security-digital-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Homeland Security Digital Library',
      translatorType: 4,
      target: '^https?://www\.hsdl\.org/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-09-26 20:12:30',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
