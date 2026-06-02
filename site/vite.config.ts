import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project path
export default defineConfig({
  base: '/awesome-coding-skills-cn/',
  plugins: [react(), tailwindcss()],
})
