import { withBase } from '../utils/url.js';

// Links da navbar. "category" é usado como hook (id/data-attribute) para
// facilitar integração futura com um back-end de categorias dinâmicas.
export const nav = [
	{
		title: 'Laminados',
		slug: withBase('/produtos#laminado'),
		category: 'laminados',
	},
	{
		title: 'Porcelanatos',
		slug: withBase('/produtos#porcelanato'),
		category: 'porcelanatos',
	},
	{
		title: 'Vinílicos',
		slug: withBase('/produtos#vinilico'),
		category: 'vinilicos',
	},
];
