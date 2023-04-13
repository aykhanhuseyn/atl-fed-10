import { configureStore, combineReducers } from '@reduxjs/toolkit';
import products from './products';
import usersApi from './usersApi';

const reducer = combineReducers({
	products,
	[usersApi.reducerPath]: usersApi.reducer,
});

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
