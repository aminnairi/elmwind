import { resolve } from "path"
import { defineConfig } from "vite"
import elm from "vite-plugin-elm"

export default defineConfig({
    root: resolve("src"),
    build: {
        outDir: resolve("public"),
        emptyOutDir: true
    },
    plugins: [
        elm()
    ],
    server: {
        port: 8000,
        host: "0.0.0.0"
    },
    preview: {
        port: 8000,
        host: "0.0.0.0"
    }
})