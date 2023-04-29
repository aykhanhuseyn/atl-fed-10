import Head from 'next/head';
import { FC } from 'react';
import { News } from '../api/news/_data';

export const getServerSideProps = async () => {
	const response = await fetch('http://localhost:3000/api/news');
	const news = await response.json();
	return { props: { news } };
};

export const getStaticProps = async () => {};

const slags = ['news-1', 'news-2', 'news-3'];
export const getStaticPaths = async () => {
	const paths = slags.map((slag) => ({ params: { slag } }));
	return { paths };
};

type Props = {
	news: News[];
};

const News: FC<Props> = ({ news }) => {
	return (
		<main>
			<Head>
				<title>News</title>
			</Head>
			<h1>News</h1>
			<ul>
				{news.map((item) => (
					<li key={item.slag}>
						<h2>
							<a href={`/news/${item.slag}`}>{item.title}</a>
						</h2>
						<h3>{item.description}</h3>
					</li>
				))}
			</ul>
		</main>
	);
};

export default News;
