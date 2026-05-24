// Translator: IEEE Computer Society
// Target: ^https?://(www[0-9]?|search[0-9]?)\.computer\.org/(csdl/(mags/[0-9a-z/]+|trans/[0-9a-z/]+|letters/[0-9a-z]+|proceedings/[0-9a-z/]+|doi|abs/proceedings)|search/results|portal/web/computingnow/.*content\?)
// TODO: Implement IEEE Computer Society translator
export default defineUnlistedScript(() => {
  console.log("Hello from translators-ieee-computer-society.ts");
});

 import type { TranslatorFunctionsType } from "@/types";
import { defineUnlistedScript } from "..";

export const functions: TranslatorFunctionsType = {
  getMetadata() {
    return {
      name: 'IEEE Computer Society',
      translatorType: 4,
      target: '^https?://(www[0-9]?|search[0-9]?)\.computer\.org/(csdl/(mags/[0-9a-z/]+|trans/[0-9a-z/]+|letters/[0-9a-z]+|proceedings/[0-9a-z/]+|doi|abs/proceedings)|search/results|portal/web/computingnow/.*content\?)',
      minVersion: '3.0',
      maxVersion: '',
      priority: 100,
      inRepository: true,
      browserSupport: 'gcsibv',
      lastUpdated: '2017-06-07 18:52:06',
    }
  },
  getAnchors() {
    throw new Error("Function not implemented.");
  },
}
