// Translator: Musée du Louvre
// Target: ^https?://collections\.louvre\.fr/
// TODO: Implement Musée du Louvre translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-mus-e-du-louvre.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Musée du Louvre',
      translatorType: 4,
      target: '^https?://collections\.louvre\.fr/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-06-11 13:07:46',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
