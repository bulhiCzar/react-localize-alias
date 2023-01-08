import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  root: './src/dev',
  // publicDir: './src/dev',
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: '../../dist'
  }
})
