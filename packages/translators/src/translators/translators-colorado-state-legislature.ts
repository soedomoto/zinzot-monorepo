// Translator: Colorado State Legislature
// Target: ^https?://leg\.colorado\.gov/(bills|bill-search)
// TODO: Implement Colorado State Legislature translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-colorado-state-legislature.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Colorado State Legislature',
      translatorType: 4,
      target: '^https?://leg\.colorado\.gov/(bills|bill-search)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-08-18 19:52:53',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
