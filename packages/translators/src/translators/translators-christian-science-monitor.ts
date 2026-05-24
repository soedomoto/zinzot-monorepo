// Translator: Christian Science Monitor
// Target: ^https?://(features\.csmonitor|www\.csmonitor)\.com
// TODO: Implement Christian Science Monitor translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-christian-science-monitor.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Christian Science Monitor',
      translatorType: 4,
      target: '^https?://(features\.csmonitor|www\.csmonitor)\.com',
      minVersion: '2.1.9',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2016-11-01 18:26:01',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
