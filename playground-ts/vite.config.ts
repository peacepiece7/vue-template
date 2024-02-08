import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path" // @types/node is installed by default
const __dirname = path.resolve()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
})
