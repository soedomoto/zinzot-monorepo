// Translator: OECD
// Target: ^https?://(www\.)?oecd-ilibrary\.org/
// TODO: Implement OECD translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-oecd.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OECD',
      translatorType: 4,
      target: '^https?://(www\.)?oecd-ilibrary\.org/',
      minVersion: '2.1',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcs',
      lastUpdated: '2021-10-08 04:15:50',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
