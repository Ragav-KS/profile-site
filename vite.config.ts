import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let isProduction = false;

  if (mode === "production") {
    isProduction = true;
  }

  return {
    plugins: [react()],
    build: {
      //add this property
      sourcemap: !isProduction,
    },
    server: {
      port: 4200,
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src/"),
      },
    },
  };
});
