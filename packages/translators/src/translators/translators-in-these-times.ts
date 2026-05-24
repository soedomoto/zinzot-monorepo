// Translator: In These Times
// Target: ^https?://(www\.)?inthesetimes\.com
// TODO: Implement In These Times translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-in-these-times.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'In These Times',
      translatorType: 4,
      target: '^https?://(www\.)?inthesetimes\.com',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2016-11-01 17:45:07',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
