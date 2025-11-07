import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Test PWA",
        short_name: "TestPWA",
        description: "A simple Progressive Web App using Vite and React",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icons/test_icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
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
