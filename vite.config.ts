import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import * as fs from "fs";
import svgLoader from "vite-svg-loader";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter(), vue() /* svgLoader() */],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   port: 443,
  //   host: "0.0.0.0",
  //   hmr: {
  //     host: "qr-menu.local",
  //     port: 443,
  //   },
  //   https: {
  //     key: fs.readFileSync("./.cert/localhost-key.pem"),
  //     cert: fs.readFileSync("./.cert/localhost.pem"),
  //   },
  // },
});
