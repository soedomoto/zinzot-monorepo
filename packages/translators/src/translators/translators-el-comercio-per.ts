// Translator: El Comercio (Perú)
// Target: ^https?://elcomercio\.pe
// TODO: Implement El Comercio (Perú) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-el-comercio-per.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'El Comercio (Perú)',
      translatorType: 4,
      target: '^https?://elcomercio\.pe',
      minVersion: '3.0',
      maxVersion: '',
      priority: 280,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-08-22 02:12:03',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
