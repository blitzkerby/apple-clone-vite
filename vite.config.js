import { defineConfig } from 'vite';
// import sass from 'vite-plugin-sass';
// import svgr from "vite-plugin-svgr";
import { resolve } from 'path';

export default defineConfig({
  // plugins: [sass(), svgr()],

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
 

