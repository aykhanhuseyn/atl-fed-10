import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';
import { RootState } from './store';
import { Product } from '../models';

// actionName: 'products/getProducts' (type)
export const getProducts = createAsyncThunk(
	'products/getProducts',
	async () => {
		const { data } = await api.get<Product[]>('/products');
		return data;
	},
);

interface ProductState {
	data: Product[];
	loading: boolean;
	error: string | null;
}

const initialState: ProductState = {
	data: [],
	loading: false,
	error: null,
};

const productsSlice = createSlice({
	name: 'products', // this is action type 'products/getProducts'
	initialState,
	reducers: {
		// getProducts(state) {
		// 	state.loading = true;
		// 	state.data = [
		// 		{
		// 			id: 1,
		// 			name: 'Product 1',
		// 			price: 100,
		// 			description: 'Product 1 description',
		// 			image: 'https://picsum.photos/200/300',
		// 		},
		// 	];
		// 	//
		// },
		// createProduct(state, action: PayloadAction<Product>) {
		// 	state.data.push(action.payload);
		// },
		// deleteProduct(state, action: PayloadAction<Pick<Product, 'id'>>) {
		// 	state.data = state.data.filter(
		// 		(product) => product.id !== action.payload.id,
		// 	);
		// },
		// editProduct(state, action: PayloadAction<Product>) {
		// 	const product = state.data.find(
		// 		(product) => product.id === action.payload.id,
		// 	);
		// 	if (product) {
		// 		product.name = action.payload.name;
		// 		product.price = action.payload.price;
		// 		product.description = action.payload.description;
		// 		product.image = action.payload.image;
		// 	}
		// },
	},
	extraReducers: {
		[getProducts.pending.type]: (state) => {
			state.loading = true;
		},
		[getProducts.fulfilled.type]: (state, action: PayloadAction<Product[]>) => {
			state.data = action.payload;
			state.loading = false;
			state.error = null;
		},
		[getProducts.rejected.type]: (state, action) => {
			state.loading = false;
			state.error = action.error.message || null;
		},
	},
});

// export const {} = productsSlice.actions;

export const productsSelector = (state: RootState) => state.products;
export const productsDataSelector = (state: RootState) => state.products.data;
export const productsLoadingSelector = (state: RootState) =>
	state.products.loading;
export const productsErrorSelector = (state: RootState) => state.products.error;

export default productsSlice.reducer;
