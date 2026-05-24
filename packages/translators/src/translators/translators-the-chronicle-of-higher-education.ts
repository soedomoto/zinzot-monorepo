// Translator: The Chronicle of Higher Education
// Target: ^https?://(www\.)?chronicle\.com/
// TODO: Implement The Chronicle of Higher Education translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-the-chronicle-of-higher-education.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'The Chronicle of Higher Education',
      translatorType: 4,
      target: '^https?://(www\.)?chronicle\.com/',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2017-06-30 05:37:23',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
