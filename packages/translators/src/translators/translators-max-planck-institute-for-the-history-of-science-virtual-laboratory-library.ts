// Translator: Max Planck Institute for the History of Science: Virtual Laboratory Library
// Target: ^https?://vlp\.mpiwg-berlin\.mpg\.de/library/
// TODO: Implement Max Planck Institute for the History of Science: Virtual Laboratory Library translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-max-planck-institute-for-the-history-of-science-virtual-laboratory-library.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Max Planck Institute for the History of Science: Virtual Laboratory Library',
      translatorType: 4,
      target: '^https?://vlp\.mpiwg-berlin\.mpg\.de/library/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2018-01-31 23:20:18',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
