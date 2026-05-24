// Translator: AllAfrica
// Target: ^https?://(fr\.)?allafrica\.com/(stories|search)/
// TODO: Implement AllAfrica translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-allafrica.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'AllAfrica',
      translatorType: 4,
      target: '^https?://(fr\.)?allafrica\.com/(stories|search)/',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsv',
      lastUpdated: '2021-10-22 19:33:08',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
