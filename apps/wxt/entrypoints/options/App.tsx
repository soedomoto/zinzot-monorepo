import { InjectAdapter } from "@/adapter/comctx";
import { injectAPI, ZinzorApp } from "@zinzot/ui";

import "@zinzot/ui/dist/ui.css";

export default function Popup() {
  const api = injectAPI(new InjectAdapter('popup'));
  return <ZinzorApp api={api} />
}
