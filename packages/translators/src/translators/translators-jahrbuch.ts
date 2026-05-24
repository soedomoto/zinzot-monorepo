// Translator: Jahrbuch
// Target: ^https?://www\.emis\.de/cgi-bin/jfmen/MATH/JFM/
// TODO: Implement Jahrbuch translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-jahrbuch.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Jahrbuch',
      translatorType: 4,
      target: '^https?://www\.emis\.de/cgi-bin/jfmen/MATH/JFM/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsv',
      lastUpdated: '2017-11-04 10:50:28',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
