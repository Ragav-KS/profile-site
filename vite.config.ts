import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    //add this property
    sourcemap: true,
  },
  server: {
    port: 4200,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  },
});
