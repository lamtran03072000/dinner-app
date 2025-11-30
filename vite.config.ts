import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react()],
    define: {
      "process.env.API_KEY": JSON.stringify(
        "AIzaSyDydgE7DlRCLEG65HgULIesUwWOfbc7HDQ"
      ),
      "process.env.GEMINI_API_KEY": JSON.stringify(
        "AIzaSyDydgE7DlRCLEG65HgULIesUwWOfbc7HDQ"
      ),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
