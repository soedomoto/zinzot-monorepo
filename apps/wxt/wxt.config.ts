import { defineConfig } from 'wxt';
import tailwindcss from "@tailwindcss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: {
    key: 'kmklplmnjkpnmkljplmnkjlpnmkljpmh',
    name: 'Zinzot',
    description: 'Zinzot Extension',
    permissions: ['identity', 'storage', 'activeTab', 'scripting'],
    action: {},
    web_accessible_resources: [
      {
        resources: ["pdf.html", "options.html"],
        matches: ["*://*/*"],
      },
    ],
  }
});
