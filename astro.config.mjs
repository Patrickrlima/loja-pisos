import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.pisomax.com.br', // Troque pelo domínio final do site (o próprio github.io ou o domínio da loja quando comprado).
  // Se for publicar em https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/ (sem domínio próprio),
  // descomente a linha abaixo e troque NOME-DO-REPOSITORIO pelo nome real do repositório no GitHub:
  // base: '/NOME-DO-REPOSITORIO/',
  sitemap: true,
  integrations: [sitemap(), icon()],
});
