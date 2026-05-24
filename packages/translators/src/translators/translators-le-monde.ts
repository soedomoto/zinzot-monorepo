// Translator: Le Monde
// Target: ^https?://(www\.)?(abonnes\.)?lemonde\.fr/
// TODO: Implement Le Monde translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-le-monde.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Le Monde',
      translatorType: 4,
      target: '^https?://(www\.)?(abonnes\.)?lemonde\.fr/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-01-13 11:53:25',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
