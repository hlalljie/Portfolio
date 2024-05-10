import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({ exportType: "component", svgrOptions: { icon: true } }),
  ],
  server: {
    proxy: {
      // Your proxy settings if any
    },
    setupMiddlewares: (middlewares, server) => {
      if (!server.middlewares) {
        return middlewares;
      }
      server.middlewares.use((req, res, next) => {
        res.setHeader(
          "Content-Security-Policy",
          "default-src 'self'; style-src 'self' 'https://fonts.googleapis.com'; font-src 'self' https://fonts.gstatic.com; script-src 'self'; object-src 'none';"
        );
        next();
      });
      return middlewares;
    },
  },
});
