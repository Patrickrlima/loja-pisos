import { withBase } from '../utils/url.js';

// Links da navbar. "category" é usado como hook (id/data-attribute) para
// facilitar integração futura com um back-end de categorias dinâmicas.
export const nav = [
	{
		title: 'Início',
		slug: withBase('/'),
		category: 'inicio',
	},
	{
		title: 'Produtos',
		slug: withBase('/produtos'),
		category: 'produtos',
	},
	{
		title: 'Sobre nós',
		slug: withBase('/sobre'),
		category: 'sobre',
	},
	{
		title: 'Projetos',
		slug: withBase('/projetos'),
		category: 'projetos',
	},
	{
		title: 'Contato',
		slug: withBase('/contato'),
		category: 'contato',
	},
];
