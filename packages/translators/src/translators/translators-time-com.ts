// Translator: Time.com
// Target: ^https?://([^/]*\.)?time\.com/
// TODO: Implement Time.com translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-time-com.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Time.com',
      translatorType: 4,
      target: '^https?://([^/]*\.)?time\.com/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsv',
      lastUpdated: '2019-10-06 18:12:01',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
