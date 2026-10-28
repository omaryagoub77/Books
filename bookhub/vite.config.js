import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Project Pages site: https://omaryagoub77.github.io/Books/
  // Keep the dev server at / while production and preview use /Books/.
  base: mode === 'development' ? '/' : '/Books/',
}))
