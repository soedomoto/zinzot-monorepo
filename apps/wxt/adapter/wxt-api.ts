import { defineProxy } from "comctx";

export class WxtAPI {
  async openOptions(query: string = "") {
    const baseUrl = browser.runtime.getURL("/options.html");
    const fullUrl = query ? `${baseUrl}${query}` : baseUrl;
    const tabs = await browser.tabs.query({ url: baseUrl + "*" });

    if (tabs.length > 0 && tabs[0].id) {
      await browser.tabs.update(tabs[0].id, { active: true });
      if (tabs[0].windowId) {
        await browser.windows.update(tabs[0].windowId, { focused: true });
      }
    } else {
      await browser.tabs.create({ url: fullUrl });
    }
  }

  async openUrl(baseUrl: string) {
    const tabs = await browser.tabs.query({ url: baseUrl + "*" });

    if (tabs.length > 0 && tabs[0].id) {
      await browser.tabs.update(tabs[0].id, { active: true });
      if (tabs[0].windowId) {
        await browser.windows.update(tabs[0].windowId, { focused: true });
      }
    } else {
      await browser.tabs.create({ url: baseUrl });
    }
  }
}

export const [provideWxtAPI, injectWxtAPI] = defineProxy(() => new WxtAPI(), {
  namespace: '__zinzot_wxt_api__',
  heartbeatTimeout: 10000,
});