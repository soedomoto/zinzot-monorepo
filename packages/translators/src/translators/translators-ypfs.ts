// Translator: YPFS
// Target: ^https?://ypfs\.som\.yale\.edu
// TODO: Implement YPFS translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ypfs.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      "name": "YPFS",
      "creator": "Corey Runkel",
      "target": "^https?://ypfs\\.som\\.yale\\.edu",
      "minVersion": "3.0",
      "maxVersion": "",
      "priority": 100,
      "inRepository": true,
      "translatorType": 4,
      "browserSupport": "gcsibv",
      "lastUpdated": "2021-03-24 13:06:04"
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}