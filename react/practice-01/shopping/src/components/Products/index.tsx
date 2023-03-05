import { Card } from '../Card';
import { products } from '../../data';
import './Products.css';

export const Products = () => {
	return (
		<div className='products'>
			<h1 className='products__title'>Products</h1>
			<div className='products__list' role='list'>
				{products.map(({ id, title, content, image, price, stock }) => (
					<Card
						key={id}
						id={id}
						title={title}
						content={content}
						image={image}
						price={price}
						stock={stock}
					/>
				))}
			</div>
		</div>
	);
};
