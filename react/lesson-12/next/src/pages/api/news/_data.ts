export type News = {
	title: string;
	description: string;
	slag: string;
	url: string;
	urlToImage: string;
};

export const news: News[] = [
	{
		title: 'News 1',
		slag: 'kendde-sok-hadise',
		description: 'Description 1',
		url: 'https://www.google.com',
		urlToImage:
			'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
	},
	{
		title: 'News 2',
		description: 'Description 2',
		slag: 'seherde-sok-hadise',
		url: 'https://www.google.com',
		urlToImage:
			'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
	},
	{
		title: 'News 3',
		description: 'Description 3',
		slag: 'rayonda-sok-hadise',
		url: 'https://www.google.com',
		urlToImage:
			'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
	},
];
