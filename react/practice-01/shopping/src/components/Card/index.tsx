import type { FC } from 'react';
import type { Product } from '../../data';
import './Card.css';

export type CartData = {
	[key: string]: number;
	// [key = id]: count;
};

export const Card: FC<Product> = ({
	id,
	title,
	stock,
	content,
	price,
	image,
}) => {
	const clickHandler = (id: number) => {
		const cart = JSON.parse(localStorage.getItem('cart') ?? '{}') as CartData;
		if (cart) {
			// increment
			// if has data increment
			if (cart[id]) {
				cart[id] += 1;
			} else {
				// else add 1
				cart[id] = 1;
			}
			localStorage.setItem('cart', JSON.stringify(cart));
		} else {
			// add
			const data = { [id]: 1 };
			localStorage.setItem('cart', JSON.stringify(data));
		}
	};

	return (
		<div role='listitem' className='product'>
			<img className='product__image' src={image} alt={title} />
			<h3 className='product__title'>{title}</h3>
			<p className='product__description'>{content}</p>
			<p data-currency='$ ' className='product__price'>
				{price.toFixed(2)}
			</p>
			<button
				onClick={() => clickHandler(id)}
				className='product__button'
				disabled={!stock}
			>
				{stock ? 'add to cart' : 'out of stock'}
			</button>
		</div>
	);
};
