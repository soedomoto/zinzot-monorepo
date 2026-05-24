// Translator: J-Stage
// Target: ^https?://www\.jstage\.jst\.go\.jp/
// TODO: Implement J-Stage translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-j-stage.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'J-Stage',
      translatorType: 4,
      target: '^https?://www\.jstage\.jst\.go\.jp/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-10-06 07:23:03',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
