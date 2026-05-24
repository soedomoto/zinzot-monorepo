// Translator: Access Medicine
// Target: ^https?://(0-)?(access(anesthesiology|cardiology|emergencymedicine|medicine|pediatrics|surgery)|neurology)\.mhmedical\.com
// TODO: Implement Access Medicine translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-access-medicine.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'Access Medicine',
      translatorType: 4,
      target: '^https?://(0-)?(access(anesthesiology|cardiology|emergencymedicine|medicine|pediatrics|surgery)|neurology)\.mhmedical\.com',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-01-12 22:14:02',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
