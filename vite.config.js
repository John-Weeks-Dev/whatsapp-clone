import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: path.resolve(`./node_modules/vue`)
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [vue()],
})
