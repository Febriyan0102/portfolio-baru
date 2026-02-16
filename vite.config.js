import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE harus sesuai nama repo GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-baru/', 
});
