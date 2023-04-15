import { configureStore } from '@reduxjs/toolkit';
import theme from './theme.slice';
import auth from './auth.slice';

export const store = configureStore({
	reducer: {
		theme,
		auth,
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
