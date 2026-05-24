import { ProvideAdapter } from "@/adapter/comctx";
import { provideWxtAPI } from "@/adapter/wxt-api";
import { provideAPI } from "@zinzot/ui";

export default defineBackground(async () => {
  console.log("Hello background!", { id: browser.runtime.id });

  provideWxtAPI(new ProvideAdapter());
  const api = provideAPI(new ProvideAdapter());
  console.log(await api.greet(`Background ${browser.runtime.id}. Current time is ${new Date().toISOString()}`));
});
