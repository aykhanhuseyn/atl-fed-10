import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../models';
import { api } from '../../api';

export const ProductsList = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		api.get('products').then(({ data }) => {
			setProducts(data);
		});
	}, []);

	return (
		<div>
			<h1>Products List</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<Link to={`${product.id}`}>
							{/* <Link to={`/products/${product.id}`}> */}
							<h2>{product.title}</h2>
							<p>{product.description}</p>
							<p>{product.price}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
