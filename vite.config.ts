import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  base: process.env.BASE_URL || "/",
  plugins: [
    solidPlugin(),
    WindiCSS(),
    Icons({
      autoInstall: true,
      compiler: "solid",
    }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
