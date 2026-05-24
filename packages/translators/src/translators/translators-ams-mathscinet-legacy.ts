// Translator: AMS MathSciNet (Legacy)
// Target: ^https?://(mathscinet\.)?ams\.[^/]*/(mathscinet/2006/)?mathscinet(\-getitem\?|/search/(publications\.html|publdoc\.html))
// TODO: Implement AMS MathSciNet (Legacy) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ams-mathscinet-legacy.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'AMS MathSciNet (Legacy)',
      translatorType: 4,
      target: '^https?://(mathscinet\.)?ams\.[^/]*/(mathscinet/2006/)?mathscinet(\-getitem\?|/search/(publications\.html|publdoc\.html))',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2023-07-06 17:03:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
