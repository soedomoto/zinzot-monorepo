// Translator: HighWire
// Target: ^https?://[^/]+/(cgi/searchresults|cgi/search|cgi/content/(abstract|full|short|summary)|current\.dtl$|content/vol[0-9]+/issue[0-9]+/(index\.dtl)?$)
// TODO: Implement HighWire translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-highwire.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'HighWire',
      translatorType: 4,
      target: '^https?://[^/]+/(cgi/searchresults|cgi/search|cgi/content/(abstract|full|short|summary)|current\.dtl$|content/vol[0-9]+/issue[0-9]+/(index\.dtl)?$)',
      minVersion: '2.1',
      maxVersion: '',
      priority: 250,
      inRepository: true,
      browserSupport: 'gcsbv',
      lastUpdated: '2015-06-02 17:33:54',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
