// Translator: APS-Physics
// Target: ^https?://(www\.)?(physics)\.aps\.org/
// TODO: Implement APS-Physics translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-aps-physics.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'APS-Physics',
      translatorType: 4,
      target: '^https?://(www\.)?(physics)\.aps\.org/',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-31 22:13:29',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
