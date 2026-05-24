// Translator: Biblioteca Nacional de Maestros
// Target: ^https?://www\.bnm\.me\.gov\.ar/catalogo
// TODO: Implement Biblioteca Nacional de Maestros translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-biblioteca-nacional-de-maestros.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Biblioteca Nacional de Maestros',
      translatorType: 4,
      target: '^https?://www\.bnm\.me\.gov\.ar/catalogo',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2020-06-22 00:23:44',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
