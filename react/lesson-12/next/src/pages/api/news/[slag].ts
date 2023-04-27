// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { News, news } from './_data';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<News | { message: string }>,
) {
	const { slag } = req.query;
	const found = news.find((n) => n.slag === slag);

	if (found) {
		res.status(200).json(found);
	} else {
		res.status(404).json({ message: `News with slug: ${slag} not found` });
	}
}
