// Translator: ACLWeb
// Target: ^https?://(www\.)?(aclanthology\.org|aclweb\.org/anthology)/
// TODO: Implement ACLWeb translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-aclweb.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'ACLWeb',
      translatorType: 4,
      target: '^https?://(www\.)?(aclanthology\.org|aclweb\.org/anthology)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-11-10 10:36:48',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
