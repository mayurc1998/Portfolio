import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // if deploying to GH Pages set base: '/REPO_NAME/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})

