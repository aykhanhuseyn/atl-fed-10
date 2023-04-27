// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { News, news } from './_data';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<News[]>,
) {
	res.status(200).json(news);
}
