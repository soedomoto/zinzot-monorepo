// Translator: WorldCat Discovery Service
// Target: ^https?://[^/]+\.worldcat\.org/
// TODO: Implement WorldCat Discovery Service translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-worldcat-discovery-service.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'WorldCat Discovery Service',
      translatorType: 4,
      target: '^https?://[^/]+\.worldcat\.org/',
      minVersion: '3.0.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-11-25 18:53:10',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
