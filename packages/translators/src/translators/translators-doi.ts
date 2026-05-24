export default defineUnlistedScript(() => {
  console.log("Hello from translators-doi.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      "translatorType": 4,
      "name": "DOI",
      "creator": "Simon Kornblith",
      "target": null,
      "minVersion": "3.0",
      "maxVersion": null,
      "priority": 400,
      "inRepository": true,
      "browserSupport": "gcsibv",
      "lastUpdated": "2024-08-21 22:15:00"
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
