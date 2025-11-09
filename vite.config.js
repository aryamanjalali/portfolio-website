import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Use base path for production builds (GitHub Pages), root for dev
  const base = command === 'build' ? '/portfolio-website/' : '/'
  
  return {
    plugins: [react()],
    base,
  }
})

