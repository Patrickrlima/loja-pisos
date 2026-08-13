import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
 site: 'https://www.pisomax.com.br', // Troque pelo domínio final do site (o próprio github.io ou o domínio da loja quando comprado).
  base: '/loja-pisos/', // Necessário porque o GitHub Pages publica dentro de uma subpasta com o nome do repositório.
  sitemap: true,
  integrations: [sitemap(), icon()],
});
