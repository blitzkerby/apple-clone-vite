import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        mac: resolve(__dirname, "mac.html"),
        // Add more entry points as needed
      },
    },
  },
});
 

