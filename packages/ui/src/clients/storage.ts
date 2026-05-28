export const storage = {
  async get(key: string): Promise<unknown> {
    if (typeof browser !== 'undefined' && browser.storage?.local) {
      // Extension Environment
      const result = await browser.storage.local.get(key);
      return result[key];
    } else {
      // Web Browser Environment
      const item = localStorage.getItem(key);
      try {
        return item ? JSON.parse(item) : null;
      } catch {
        return item; // Return raw string if not JSON
      }
    }
  },

  async set(key: string, value: unknown): Promise<void> {
    if (typeof browser !== 'undefined' && browser.storage?.local) {
      // Extension Environment
      await browser.storage.local.set({ [key]: value });
    } else {
      // Web Browser Environment
      const valueToString = typeof value === 'object' ? JSON.stringify(value) : String(value);
      localStorage.setItem(key, valueToString);
    }
  },

  async remove(key: string): Promise<void> {
    if (typeof browser !== 'undefined' && browser.storage?.local) {
      await browser.storage.local.remove(key);
    } else {
      localStorage.removeItem(key);
    }
  }
};