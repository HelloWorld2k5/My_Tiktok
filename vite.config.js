import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Cấu hình path để tránh import dài, chỉ cần import @ là xong
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    }
  }
})
