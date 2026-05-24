import { ZinzorApp } from "@zinzot/ui";
import { useAPI } from "@/hooks/useAPI";

import "@zinzot/ui/dist/ui.css";

export function App() {
  const api = useAPI();
  return <ZinzorApp api={api} />
}

export default App;
