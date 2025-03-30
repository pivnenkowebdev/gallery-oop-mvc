import { defineConfig } from "vite";
export default defineConfig({
  base: "/gallery-oop-mvc/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
