// Translator: World History Connected
// Target: worldhistoryconnected\.press|historycooperative.*/whc/
// TODO: Implement World History Connected translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-world-history-connected.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'World History Connected',
      translatorType: 4,
      target: 'worldhistoryconnected\.press|historycooperative.*/whc/',
      minVersion: '1.0.0b4.r5',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2014-02-27 23:05:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
