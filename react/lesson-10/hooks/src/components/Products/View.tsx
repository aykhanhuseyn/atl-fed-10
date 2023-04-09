import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../models';
import { api } from '../../api';

export const ProductView = () => {
	const params = useParams();

	const [product, setProduct] = useState<Product>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		api.get<Product>(`/products/${params.id}`).then(({ data }) => {
			setProduct(data);
			setLoading(false);
		});
	}, []);

	return (
		<div>
			{loading && <h1>Loading...</h1>}
			{product && (
				<>
					<h1>{product?.title}</h1>
					<h2>{product?.description}</h2>
				</>
			)}
		</div>
	);
};
