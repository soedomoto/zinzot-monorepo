// Translator: Insignia OPAC
// Target: ^https?://[^/]+/(library|crts)/[^/?#]+\.aspx
// TODO: Implement Insignia OPAC translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-insignia-opac.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Insignia OPAC',
      translatorType: 4,
      target: '^https?://[^/]+/(library|crts)/[^/?#]+\.aspx',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcs',
      lastUpdated: '2017-01-01 15:21:20',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
