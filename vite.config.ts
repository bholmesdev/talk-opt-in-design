import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["/spa-what-do-you-mean.mov"],
    },
  },
});
