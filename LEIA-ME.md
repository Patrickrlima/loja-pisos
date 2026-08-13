# Site Loja de Pisos — guia rápido

Este site foi construído em cima de um tema Astro de código aberto (licença MIT,
o arquivo `LICENSE` está incluído e pode ficar no projeto), com todo o conteúdo
já adaptado para uma loja de pisos, em português. Tudo que você vê é placeholder
("PisoMax") — troque pelos dados reais da loja que for comprar o site.

## O que trocar antes de entregar pra loja

### 1. Nome, WhatsApp, telefone, e-mail, endereço
Arquivo: `src/config/settings.js`
- `name`: nome da loja
- `whatsappNumber`: número real, formato `55DDDNUMERO` (só números)
- `phoneDisplay`, `email`, `address`, `hours`
- `url`: domínio real do site (sem barra no final)

### 2. Logo
Arquivo: `src/components/Logo.astro`
- Hoje é só texto ("Piso" + "Max"). Se a loja tiver logo em imagem, troque o
  `<p>` por uma `<img>` apontando pro arquivo da logo em `public/`.

### 3. Cores da marca
Arquivo: `src/styles/theme.css`
- `--theme-primary` é a cor principal (botões, links, ícones).
- Troque pelos tons da identidade visual da loja.

### 4. Fotos reais dos produtos
Pasta: `public/assets/images/placeholders/`
- Os arquivos `.svg` ali são só ilustrações genéricas (padrões de tábua/piso)
  pra não deixar a página vazia. Troque por fotos reais dos produtos e da loja
  (mesmo nome de arquivo ou ajuste o caminho nas páginas):
  - `hero-piso-madeira.svg` → foto de destaque da home
  - `categoria-porcelanato.svg`, `categoria-laminado.svg`,
    `categoria-vinilico.svg`, `categoria-externo.svg` → fotos de cada categoria
  - `loja-fachada.svg` → foto real da fachada/loja
  - `equipe-instalacao.svg` → foto da equipe (se for usar)
- Pode usar `.jpg`/`.png`/`.webp` normalmente, só ajustar a extensão nos
  arquivos de página (`src/pages/index.astro` e `src/pages/produtos/index.astro`).

### 5. Textos
Todos os textos (Home, Sobre, Produtos, Contato, Política de Privacidade) estão
em português e prontos pra usar, mas são genéricos — ideal revisar com o
cliente pra deixar com a história e diferenciais reais da loja dele.
Arquivos em `src/pages/`.

### 6. Favicon e imagem de compartilhamento (redes sociais)
`public/favicon.png` e `public/social.png` — hoje têm a marca "PisoMax"
placeholder. Troque pela identidade real quando definida.

## Como publicar no GitHub Pages (grátis, sem custo mensal)

O projeto já vem pronto com o workflow de deploy automático
(`.github/workflows/deploy.yml`). Passo a passo pelo GitHub Desktop, do jeito
que você já usa nos outros projetos:

1. **Crie um repositório novo no GitHub** (pode ser público ou privado — Pages
   funciona nos dois, só que repositório privado precisa de conta GitHub Pro
   pra publicar; se for conta grátis, deixe público).
2. No GitHub Desktop, adicione esta pasta como repositório local
   ("Add Existing Repository") e publique ("Publish repository") apontando
   pro repositório criado.
3. No site do GitHub, vá em **Settings → Pages** do repositório e em
   "Build and deployment" escolha **Source: GitHub Actions**.
4. Pronto — a cada vez que você publicar uma alteração (commit + push pelo
   GitHub Desktop), o site builda e atualiza sozinho em alguns minutos.
5. A URL fica `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

### Ajuste importante antes do primeiro deploy

Abra `astro.config.mjs`:
- Se for usar só a URL padrão do GitHub (`SEU-USUARIO.github.io/NOME-DO-REPOSITORIO`),
  **descomente** a linha `base:` e troque `NOME-DO-REPOSITORIO` pelo nome real
  do repositório que você criou.
- Se depois for colocar um domínio próprio (ex: `www.pisomax.com.br`), aí a
  linha `base` deve continuar comentada/removida, e você configura o domínio
  em Settings → Pages → Custom domain (o GitHub cria o arquivo `CNAME`
  sozinho).

Sem esse ajuste de `base`, o site sobe mas os links, CSS e imagens quebram,
porque o GitHub Pages publica dentro de uma subpasta com o nome do repositório.

## Sobre o GitHub x Vercel/Netlify

O GitHub em si é só onde o código fica guardado (isso é sempre grátis, com ou
sem Vercel/Netlify). O que muda é o **hospedeiro do site**:
- **GitHub Pages**: hospedagem 100% grátis, direto do próprio GitHub, sem
  limite de uso pra um site como esse. É a opção mais simples pra manter sem
  custo nenhum enquanto você for o único editando.
- **Vercel/Netlify**: também têm plano grátis generoso pra esse tipo de site,
  mas cobram (ou pedem upgrade) se passar de um certo volume de builds/tráfego
  — o que não deve acontecer aqui, mas é o "medo" que você mencionou.

Pra esse projeto, GitHub Pages resolve bem e não tem pegadinha de custo.



```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## Como gerar a versão de produção

```bash
npm run build
```

Gera a pasta `dist/` com o site pronto pra hospedar em qualquer lugar
(GitHub Pages, Vercel, Netlify, etc). Veja abaixo o passo a passo pro GitHub
Pages, que é a opção recomendada pra esse projeto.

## Formulário de contato

O formulário de contato (`src/components/forms/ContactForm.astro`) está
configurado pra usar o **Formspree** (grátis até 50 envios/mês), que funciona
em qualquer hospedagem estática, incluindo GitHub Pages:

1. Crie uma conta em https://formspree.io
2. Crie um formulário novo e copie o endpoint (algo como
   `https://formspree.io/f/xxxxxxx`)
3. Abra `src/components/forms/ContactForm.astro` e troque
   `SEU-ENDPOINT-AQUI` pelo endpoint copiado

O WhatsApp continua sendo o canal principal (botão em destaque em todas as
páginas) — o formulário é só um canal extra.

## Páginas do site

- `/` — Home
- `/produtos` — Catálogo (Porcelanato, Laminado, Vinílico, Área Externa)
- `/sobre` — Sobre a loja
- `/contato` — Formulário + WhatsApp + dados de contato
- `/politica-de-privacidade` — Política de privacidade (texto simples e real,
  não é lorem ipsum — revisar antes de publicar)
