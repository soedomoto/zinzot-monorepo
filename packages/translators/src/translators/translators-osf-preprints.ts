// Translator: OSF Preprints
// Target: ^https?://(osf\.io|psyarxiv\.com|arabixiv\.org|biohackrxiv\.org|eartharxiv\.org|ecoevorxiv\.org|ecsarxiv\.org|edarxiv\.org|engrxiv\.org|frenxiv\.org|indiarxiv\.org|mediarxiv\.org|paleorxiv\.org)
// TODO: Implement OSF Preprints translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-osf-preprints.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'OSF Preprints',
      translatorType: 4,
      target: '^https?://(osf\.io|psyarxiv\.com|arabixiv\.org|biohackrxiv\.org|eartharxiv\.org|ecoevorxiv\.org|ecsarxiv\.org|edarxiv\.org|engrxiv\.org|frenxiv\.org|indiarxiv\.org|mediarxiv\.org|paleorxiv\.org)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-11-07 22:20:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
