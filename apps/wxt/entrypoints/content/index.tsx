import type { ContentScriptContext } from "#imports";
import { InjectAdapter } from "@/adapter/comctx";
import { injectWxtAPI } from "@/adapter/wxt-api";
import { translators as oTranslators } from "@zinzot/translators";
import { injectAPI } from '@zinzot/ui';
import { createRoot } from "react-dom/client";
import DialogDownloader, { DialogDownloaderProps } from "./dialog-downloader";

async function createUi(ctx: ContentScriptContext, props: DialogDownloaderProps) {
  (await createShadowRootUi(ctx, {
    name: "zinzot-web-importer-dialog",
    position: 'overlay', // Ensures it can float over existing web elements
    anchor: 'body',      // Attaches it directly to the root body
    append: 'last',      // Injects it at the very end of the DOM structure
    zIndex: 999999999,   // WXT natively applies this to the Shadow Host element
    onMount(uiContainer) {
      const app = document.createElement("div");
      // app.className = "fixed top-4 right-4 !z-[1999999999]";
      uiContainer.append(app);

      // Create a root on the UI container and render a component
      const root = createRoot(app);
      root.render(<DialogDownloader {...props} />);
      return root;
    },
    onRemove(root) {
      root?.unmount();
    },
  })).mount();
}

export default defineContentScript({
  matches: ["*://*/*"],
  cssInjectionMode: "ui",
  async main(ctx) {
    const wxtApi = injectWxtAPI(new InjectAdapter('content'));
    const api = injectAPI(new InjectAdapter('content'));
    console.log(await api.greet(`Hello from content script! Current time is ${new Date().toISOString()}`));

    const translators = Object.values(oTranslators);

    // Sort translators by priority (ascending)
    translators.sort((a, b) => (a?.functions?.getMetadata()?.priority || 0) - (b?.functions?.getMetadata()?.priority || 0));

    // Get first matching translator
    const translator = translators.find(translator => {
      const metadata = translator?.functions?.getMetadata();
      if (!metadata) return false;

      try {
        let isMatch = true;
        if (metadata?.target) isMatch = new RegExp(metadata.target).test(window.location.href);
        return isMatch;
      } catch (e) {
        // Invalid regex pattern, skip
        return false;
      }
    });

    if (translator?.functions?.getMetadata?.()) {
      console.log(`Zinzot Web Importer: Using translator for ${translator?.functions?.getMetadata().name}`);
      createUi(ctx, { wxtApi, api, translator: translator.functions });
    }
  }
});
