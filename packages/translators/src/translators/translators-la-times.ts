// Translator: LA Times
// Target: ^https?://(www\.|travel\.|articles\.|latimesblogs\.)?latimes\.com
// TODO: Implement LA Times translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-la-times.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'LA Times',
      translatorType: 4,
      target: '^https?://(www\.|travel\.|articles\.|latimesblogs\.)?latimes\.com',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-11-07 04:08:21',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
