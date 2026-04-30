// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/demo/home/node_modules/vite/dist/node/index.js";
import Components from "file:///E:/demo/home/node_modules/unplugin-vue-components/dist/vite.js";
import { AntDesignVueResolver } from "file:///E:/demo/home/node_modules/unplugin-vue-components/dist/resolvers.js";
import plugin from "file:///E:/demo/home/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///E:/demo/home/node_modules/unplugin-auto-import/dist/vite.js";
import { VantResolver } from "file:///E:/demo/home/node_modules/@vant/auto-import-resolver/dist/index.esm.mjs";
import legacy from "file:///E:/demo/home/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/demo/home/vite.config.js";
var INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
var DRIVE_LETTER_REGEX = /^[a-z]:/i;
var vite_config_default = defineConfig({
  base: "./",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
        // or 'modern'
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : "";
          return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "");
        }
      }
    }
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      // 面向IE11时需要此插件
      modernPolyfills: true
      // polyfills: ['es.object.values', 'es.array.flat-map']
    }),
    plugin(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
          // css in js
        }),
        VantResolver()
      ]
    }),
    AutoImport({
      resolvers: [VantResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    host: "0.0.0.0",
    port: 3e3,
    open: false,
    proxy: {
      "/devApi": {
        // target: "http://8.149.246.127:5209",
        target: "http://localhost:5209/",
        changeOrigin: true,
        ws: true,
        secure: false,
        rewrite: (path) => path.replace(new RegExp("^/devApi"), "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxkZW1vXFxcXGhvbWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGRlbW9cXFxcaG9tZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovZGVtby9ob21lL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xyXG5pbXBvcnQgeyBBbnREZXNpZ25WdWVSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcclxuaW1wb3J0IHBsdWdpbiBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcblxyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xyXG5pbXBvcnQgeyBWYW50UmVzb2x2ZXIgfSBmcm9tIFwiQHZhbnQvYXV0by1pbXBvcnQtcmVzb2x2ZXJcIjtcclxuaW1wb3J0IGxlZ2FjeSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCI7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XHJcbmNvbnN0IElOVkFMSURfQ0hBUl9SRUdFWCA9IC9bXFx1MDAwMC1cXHUwMDFGXCIjJCYqKyw6Ozw9Pj9bXFxdXmB7fH1cXHUwMDdGXS9nO1xyXG5jb25zdCBEUklWRV9MRVRURVJfUkVHRVggPSAvXlthLXpdOi9pO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiBcIi4vXCIsXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhcGk6IFwibW9kZXJuLWNvbXBpbGVyXCIsIC8vIG9yICdtb2Rlcm4nXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3Nhbml0aXplRmlsZU5hbWUudHNcclxuICAgICAgICBzYW5pdGl6ZUZpbGVOYW1lKG5hbWUpIHtcclxuICAgICAgICAgIGNvbnN0IG1hdGNoID0gRFJJVkVfTEVUVEVSX1JFR0VYLmV4ZWMobmFtZSk7XHJcbiAgICAgICAgICBjb25zdCBkcml2ZUxldHRlciA9IG1hdGNoID8gbWF0Y2hbMF0gOiBcIlwiO1xyXG4gICAgICAgICAgLy8gQSBgOmAgaXMgb25seSBhbGxvd2VkIGFzIHBhcnQgb2YgYSB3aW5kb3dzIGRyaXZlIGxldHRlciAoZXg6IEM6XFxmb28pXHJcbiAgICAgICAgICAvLyBPdGhlcndpc2UsIGF2b2lkIHRoZW0gYmVjYXVzZSB0aGV5IGNhbiByZWZlciB0byBOVEZTIGFsdGVybmF0ZSBkYXRhIHN0cmVhbXMuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBkcml2ZUxldHRlciArXHJcbiAgICAgICAgICAgIG5hbWUuc2xpY2UoZHJpdmVMZXR0ZXIubGVuZ3RoKS5yZXBsYWNlKElOVkFMSURfQ0hBUl9SRUdFWCwgXCJcIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBsZWdhY3koe1xyXG4gICAgICB0YXJnZXRzOiBbXCJkZWZhdWx0c1wiLCBcIm5vdCBJRSAxMVwiXSxcclxuICAgICAgYWRkaXRpb25hbExlZ2FjeVBvbHlmaWxsczogW1wicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCJdLCAvLyBcdTk3NjJcdTU0MTFJRTExXHU2NUY2XHU5NzAwXHU4OTgxXHU2QjY0XHU2M0QyXHU0RUY2XHJcbiAgICAgIG1vZGVyblBvbHlmaWxsczogdHJ1ZSxcclxuICAgICAgLy8gcG9seWZpbGxzOiBbJ2VzLm9iamVjdC52YWx1ZXMnLCAnZXMuYXJyYXkuZmxhdC1tYXAnXVxyXG4gICAgfSksXHJcbiAgICBwbHVnaW4oKSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICByZXNvbHZlcnM6IFtcclxuICAgICAgICBBbnREZXNpZ25WdWVSZXNvbHZlcih7XHJcbiAgICAgICAgICBpbXBvcnRTdHlsZTogZmFsc2UsIC8vIGNzcyBpbiBqc1xyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBWYW50UmVzb2x2ZXIoKSxcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG5cclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICByZXNvbHZlcnM6IFtWYW50UmVzb2x2ZXIoKV0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgcG9ydDogMzAwMCxcclxuICAgIG9wZW46IGZhbHNlLFxyXG4gICAgcHJveHk6IHtcclxuICAgICAgXCIvZGV2QXBpXCI6IHtcclxuICAgICAgICAvLyB0YXJnZXQ6IFwiaHR0cDovLzguMTQ5LjI0Ni4xMjc6NTIwOVwiLFxyXG4gICAgICAgIHRhcmdldDogXCJodHRwOi8vbG9jYWxob3N0OjUyMDkvXCIsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHdzOiB0cnVlLFxyXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKFwiXi9kZXZBcGlcIiksIFwiXCIpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0TixTQUFTLGVBQWUsV0FBVztBQUUvUCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFlBQVk7QUFFbkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxZQUFZO0FBVGtILElBQU0sMkNBQTJDO0FBV3RMLElBQU0scUJBQXFCO0FBQzNCLElBQU0scUJBQXFCO0FBRzNCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLEtBQUs7QUFBQTtBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBO0FBQUEsUUFFTixpQkFBaUIsTUFBTTtBQUNyQixnQkFBTSxRQUFRLG1CQUFtQixLQUFLLElBQUk7QUFDMUMsZ0JBQU0sY0FBYyxRQUFRLE1BQU0sQ0FBQyxJQUFJO0FBR3ZDLGlCQUNFLGNBQ0EsS0FBSyxNQUFNLFlBQVksTUFBTSxFQUFFLFFBQVEsb0JBQW9CLEVBQUU7QUFBQSxRQUVqRTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsU0FBUyxDQUFDLFlBQVksV0FBVztBQUFBLE1BQ2pDLDJCQUEyQixDQUFDLDZCQUE2QjtBQUFBO0FBQUEsTUFDekQsaUJBQWlCO0FBQUE7QUFBQSxJQUVuQixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsTUFDVCxXQUFXO0FBQUEsUUFDVCxxQkFBcUI7QUFBQSxVQUNuQixhQUFhO0FBQUE7QUFBQSxRQUNmLENBQUM7QUFBQSxRQUVELGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFFRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsSUFDNUIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxXQUFXO0FBQUE7QUFBQSxRQUVULFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLElBQUk7QUFBQSxRQUNKLFFBQVE7QUFBQSxRQUNSLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxJQUFJLE9BQU8sVUFBVSxHQUFHLEVBQUU7QUFBQSxNQUM1RDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
