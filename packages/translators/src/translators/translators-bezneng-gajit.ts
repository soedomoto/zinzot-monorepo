// Translator: Bezneng Gajit
// Target: ^https?://(www\.)?beznen\.ru
// TODO: Implement Bezneng Gajit translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-bezneng-gajit.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Bezneng Gajit',
      translatorType: 4,
      target: '^https?://(www\.)?beznen\.ru',
      minVersion: '1.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2016-11-01 18:22:20',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
