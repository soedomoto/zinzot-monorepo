// Translator: Dar Almandumah
// Target: ^https?://search\.mandumah\.com/(Search|Record)/
// TODO: Implement Dar Almandumah translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-dar-almandumah.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Dar Almandumah',
      translatorType: 4,
      target: '^https?://search\.mandumah\.com/(Search|Record)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-07-30 23:08:33',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
