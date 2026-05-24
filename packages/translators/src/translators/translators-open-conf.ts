// Translator: Open Conf
// Target: ^https?://(www\.)?openconf\.(com|org)/.+/request\.php
// TODO: Implement Open Conf translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-open-conf.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Open Conf',
      translatorType: 4,
      target: '^https?://(www\.)?openconf\.(com|org)/.+/request\.php',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-05-26 15:41:56',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
