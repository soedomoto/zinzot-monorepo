// Translator: Legislative Insight
// Target: ^https?://(preprod\.)?li\.proquest\.com/legislativeinsight/LegHistMain\.jsp
// TODO: Implement Legislative Insight translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-legislative-insight.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Legislative Insight',
      translatorType: 4,
      target: '^https?://(preprod\.)?li\.proquest\.com/legislativeinsight/LegHistMain\.jsp',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-28 04:36:45',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
