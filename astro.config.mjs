import { defineConfig } from 'astro/config';

// El CV interactivo es la página principal (src/pages/index.astro).
// El blog se genera en /blog (inglés) y /es/blog (español).
export default defineConfig({
  site: 'https://alvaroliebana.com',
  trailingSlash: 'ignore',
  // Los bloques de código siguen el tema claro u oscuro de la web (ver PostLayout.astro)
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
