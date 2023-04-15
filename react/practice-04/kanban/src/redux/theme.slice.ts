import { createSlice } from '@reduxjs/toolkit';
import { Color, ThemeMode } from '../constants/colors';

export interface Theme {
	primary: Color;
	bg: Color;
	color: Color;
	border: Color;
}

interface ThemeState {
	mode: ThemeMode;
	light: Theme;
	dark: Theme;
}

const initialState: ThemeState = {
	mode: ThemeMode.LIGHT,
	light: {
		primary: Color.PURPLE,
		bg: Color.WHITE,
		color: Color.BLACK,
		border: Color.LINES_LIGHT,
	},
	dark: {
		primary: Color.PURPLE,
		bg: Color.VERY_DARK_GRAY,
		color: Color.WHITE,
		border: Color.LINES_DARK,
	},
};

const slice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.mode =
				state.mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
		},
		setLight: (state) => {
			state.mode = ThemeMode.LIGHT;
		},
		setDark: (state) => {
			state.mode = ThemeMode.DARK;
		},
	},
});

export const { toggleTheme, setLight, setDark } = slice.actions;

export default slice.reducer;
