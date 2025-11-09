import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Use base path for production builds (GitHub Pages), root for dev
  // Always use the base path for builds to ensure consistency
  const base = process.env.NODE_ENV === 'production' || command === 'build' 
    ? '/portfolio-website/' 
    : '/'
  
  return {
    plugins: [react()],
    base,
  }
})

