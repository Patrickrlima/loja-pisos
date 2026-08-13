import { withBase } from '../utils/url.js';

export const footerSocials = [
	{
		name: 'WhatsApp',
		url: 'https://wa.me/5551999999999',
		icon: 'mdi:whatsapp',
	},
	{
		name: 'Instagram',
		url: 'https://instagram.com/',
		icon: 'mdi:instagram',
	},
	{
		name: 'Facebook',
		url: 'https://facebook.com/',
		icon: 'mdi:facebook',
	},
];

export const footerLists = [
	{
		title: 'Produtos',
		items: [
			{ title: 'Porcelanatos', slug: withBase('/produtos#porcelanato') },
			{ title: 'Laminados', slug: withBase('/produtos#laminado') },
			{ title: 'Vinílicos', slug: withBase('/produtos#vinilico') },
			{ title: 'Área externa', slug: withBase('/produtos#externo') },
		],
	},
	{
		title: 'Empresa',
		items: [
			{ title: 'Sobre nós', slug: withBase('/sobre') },
			{ title: 'Contato', slug: withBase('/contato') },
			{ title: 'Política de Privacidade', slug: withBase('/politica-de-privacidade') },
		],
	},
];
