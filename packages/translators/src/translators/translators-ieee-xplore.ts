// Translator: IEEE Xplore
// Target: ^https?://([^/]+\.)?ieeexplore\.ieee\.org/([^#]+[&?]arnumber=\d+|(abstract/)?document/|search/(searchresult|selected)\.jsp|xpl/(mostRecentIssue|tocresult)\.jsp\?|xpl/conhome/\d+/proceeding)
// TODO: Implement IEEE Xplore translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ieee-xplore.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'IEEE Xplore',
      translatorType: 4,
      target: '^https?://([^/]+\.)?ieeexplore\.ieee\.org/([^#]+[&?]arnumber=\d+|(abstract/)?document/|search/(searchresult|selected)\.jsp|xpl/(mostRecentIssue|tocresult)\.jsp\?|xpl/conhome/\d+/proceeding)',
      minVersion: '4.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2025-04-04 19:00:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
