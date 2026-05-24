// Translator: Globes
// Target: ^https?://(www\.)?(en\.)?globes\.co\.il/
// TODO: Implement Globes translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-globes.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Globes',
      translatorType: 4,
      target: '^https?://(www\.)?(en\.)?globes\.co\.il/',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2019-12-21 07:49:34',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
