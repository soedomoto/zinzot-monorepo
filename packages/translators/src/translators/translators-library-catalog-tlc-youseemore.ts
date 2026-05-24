// Translator: Library Catalog (TLC/YouSeeMore)
// Target: TLCScripts/interpac\.dll\?(.*LabelDisplay.*RecordNumber=[0-9]|Search|ItemTitles)
// TODO: Implement Library Catalog (TLC/YouSeeMore) translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-library-catalog-tlc-youseemore.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Library Catalog (TLC/YouSeeMore)',
      translatorType: 4,
      target: 'TLCScripts/interpac\.dll\?(.*LabelDisplay.*RecordNumber=[0-9]|Search|ItemTitles)',
      minVersion: '1.0.0b3.r1',
      maxVersion: '',
      priority: 260,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2021-12-28 03:53:31',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
