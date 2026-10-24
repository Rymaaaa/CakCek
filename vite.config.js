import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: ['.loca.lt', '.lhr.life'],
  },
  plugins: [
    tailwindcss(), 
    handlebars({
      partialDirectory: resolve(__dirname, 'src/components'),
    }),
  ],
});
