import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const proxy = { '/products': 'http://127.0.0.1:3002' }

export default defineConfig({
  plugins: [react()],
  server: { proxy },
  preview: { proxy },
})
