import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import plugin from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or 'modern'
      },
    },
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"], // 面向IE11时需要此插件
      modernPolyfills: true,
      // polyfills: ['es.object.values', 'es.array.flat-map']
    }),
    plugin(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),

        VantResolver(),
      ],
    }),

    AutoImport({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    proxy: {
      "/devApi": {
        // target: "http://8.149.246.127:5209",
        //target: "https://www.scspcba.cn/",
        target: "http://localhost:5209/",
        changeOrigin: true,
        ws: true,
        secure: false,
        rewrite: (path) => path.replace(new RegExp("^/devApi"), ""),
      },
      "/parseapi": {
        target: "http://127.0.0.1:5210/",
        changeOrigin: true,
        ws: true,
        secure: false,
        rewrite: (path) => path.replace(new RegExp("^/parseapi"), ""),
      },
    },
  },
});
