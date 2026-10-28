import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo under /Books/; Vercel serves it at /.
const isVercel = Boolean(process.env.VERCEL)

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Keep dev at /, GitHub Pages at /Books/, and Vercel at /.
  base: mode === 'development' || isVercel ? '/' : '/Books/',
}))
