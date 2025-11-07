import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "PWA Test",
        short_name: "PWA",
        description: "A simple Progressive Web App using Vite and React",
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/test_icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/test_icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/test_icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/test_icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "icons/test_icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "icons/test_icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/test_icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/test_icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/test_icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        start_url: ".",
        display: "standalone",
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: "*",
            handler: "CacheFirst",
          },
        ],
      },
      registerType: "autoUpdate",
    }),
  ],
});
