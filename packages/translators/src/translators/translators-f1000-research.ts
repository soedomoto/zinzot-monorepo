// Translator: F1000 Research
// Target: ^https?://(www\.)?(((openresearchcentral|(aas|amrc|hrb|wellcome|gates)openresearch)\.org)|(f1000research|emeraldopenresearch)\.com)/
// TODO: Implement F1000 Research translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-f1000-research.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'F1000 Research',
      translatorType: 4,
      target: '^https?://(www\.)?(((openresearchcentral|(aas|amrc|hrb|wellcome|gates)openresearch)\.org)|(f1000research|emeraldopenresearch)\.com)/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 200,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2024-03-21 19:05:49',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
