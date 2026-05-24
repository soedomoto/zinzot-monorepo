// Translator: Eurogamer/USgamer
// Target: ^https?://(www\.)?(eurogamer|usgamer)\.(net|cz|de|es|it|nl|pl|pt)
// TODO: Implement Eurogamer/USgamer translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-eurogamer-usgamer.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Eurogamer/USgamer',
      translatorType: 4,
      target: '^https?://(www\.)?(eurogamer|usgamer)\.(net|cz|de|es|it|nl|pl|pt)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-07-14 19:42:21',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
