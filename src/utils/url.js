// Monta o caminho de um arquivo dentro de "public/" respeitando o "base"
// configurado no astro.config.mjs (necessário pro GitHub Pages, que publica
// o site dentro de uma subpasta com o nome do repositório).
export function withBase(path) {
	const base = import.meta.env.BASE_URL || '/';
	const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
	const cleanPath = path.startsWith('/') ? path : `/${path}`;
	return `${cleanBase}${cleanPath}`;
}
