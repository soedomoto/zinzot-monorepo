// Translator: NASA NTRS
// Target: ^https?://ntrs\.nasa\.gov/(citations/|search)
// TODO: Implement NASA NTRS translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-nasa-ntrs.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'NASA NTRS',
      translatorType: 4,
      target: '^https?://ntrs\.nasa\.gov/(citations/|search)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-03-21 20:00:21',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
