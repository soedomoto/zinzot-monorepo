// Translator: arXiv.org
// Target: ^https?://([^\.]+\.)?(arxiv\.org|xxx\.lanl\.gov)/(search|find|catchup|list/\w|abs/|pdf/)
// TODO: Implement arXiv.org translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-arxiv-org.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'arXiv.org',
      translatorType: 12,
      target: '^https?://([^\.]+\.)?(arxiv\.org|xxx\.lanl\.gov)/(search|find|catchup|list/\w|abs/|pdf/)',
      minVersion: '6.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-12-03 16:00:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
