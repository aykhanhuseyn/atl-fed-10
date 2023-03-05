import React from 'react';
import { products } from '../../data';
import type { CartData } from '../Card';

export const Cart = () => {
	const cart = JSON.parse(localStorage.getItem('cart') ?? '{}') as CartData;
	return (
		<>
			{products
				.filter(({ id }) => cart?.[id])
				.map(({ id, title, content, image, price, stock }) => (
					<div>
						<img src={image} width={200} height={200} />
						{title}
					</div>
				))}
		</>
	);
};
