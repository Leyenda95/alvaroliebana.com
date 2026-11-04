import { defineConfig } from 'astro/config';

// La página de presentación está en / (src/pages/index.astro) y el CV interactivo en /cv (src/pages/cv.astro).
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
