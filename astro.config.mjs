import { defineConfig } from 'astro/config';

// El CV interactivo es la página principal (src/pages/index.astro).
// El blog se genera en /blog (inglés) y /es/blog (español).
export default defineConfig({
  site: 'https://alvaroliebana.com',
  trailingSlash: 'ignore',
});
