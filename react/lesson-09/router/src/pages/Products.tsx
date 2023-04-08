import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export const Products = () => {
	const products = useLoaderData() as Product[];

	useEffect(() => {
		console.log('products component mounted');
	}, []);

	return (
		<div>
			<h2>Products</h2>
			<div
				style={{
					display: 'gird',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: '1rem',
				}}
			>
				{products &&
					products.map((product) => (
						<div key={product.id}>
							<h3>{product.title}</h3>
							<p>{product.description}</p>
							<p>{product.price}</p>
							<img
								src={product.image}
								alt={product.title}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
								}}
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default Products;

export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: Rating;
}

export interface Rating {
	rate: number;
	count: number;
}
