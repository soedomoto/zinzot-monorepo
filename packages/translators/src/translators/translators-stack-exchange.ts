// Translator: Stack Exchange
// Target: ^https://([^/]+\.)?(((stack(overflow|exchange)|serverfault|askubuntu|superuser|stackapps)\.com)|mathoverflow\.net)/
// TODO: Implement Stack Exchange translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-stack-exchange.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Stack Exchange',
      translatorType: 4,
      target: '^https://([^/]+\.)?(((stack(overflow|exchange)|serverfault|askubuntu|superuser|stackapps)\.com)|mathoverflow\.net)/',
      minVersion: '5.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2022-04-03 13:21:00',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
