import { createSlice } from '@reduxjs/toolkit';
import { Color, ThemeMode } from '../constants/colors';

const getHexColorPercentage = (hexColor: Color, percentage: number): Color => {
	const hexPercentage = Math.floor((255 * percentage) / 100);
	const adjustedHexPercentage = ('00' + hexPercentage.toString(16)).slice(-2);
	return (hexColor + adjustedHexPercentage) as Color;
};

export interface Theme {
	backgroundColor: Color;
	textColor: Color;
	borderColor: Color;
	labelColor: Color;
	inputBackground: Color;
	white: Color;
	black: Color;
	mediumGray: Color;
	purple: Color;
	purpleHover: Color;
	secondary: Color;
	secondaryHover: Color;
	red: Color;
	redHover: Color;
}

interface ThemeState {
	mode: ThemeMode;
	light: Theme;
	dark: Theme;
}

const initialState: ThemeState = {
	mode: ThemeMode.LIGHT,
	light: {
		backgroundColor: Color.WHITE,
		textColor: Color.BLACK,
		labelColor: Color.MEDIUM_GRAY,
		inputBackground: Color.WHITE,
		borderColor: Color.LINES_LIGHT,
		secondary: getHexColorPercentage(Color.PURPLE, 10),
		secondaryHover: getHexColorPercentage(Color.PURPLE, 25),
		white: Color.WHITE,
		black: Color.BLACK,
		mediumGray: Color.MEDIUM_GRAY,
		purple: Color.PURPLE,
		purpleHover: Color.PURPLE_HOVER,
		red: Color.RED,
		redHover: Color.RED_HOVER,
	},
	dark: {
		backgroundColor: Color.VERY_DARK_GRAY,
		textColor: Color.WHITE,
		labelColor: Color.MEDIUM_GRAY,
		inputBackground: Color.DARK_GRAY,
		borderColor: Color.LINES_DARK,
		secondary: Color.WHITE,
		secondaryHover: Color.WHITE,
		white: Color.WHITE,
		black: Color.BLACK,
		mediumGray: Color.MEDIUM_GRAY,
		purple: Color.PURPLE,
		purpleHover: Color.PURPLE_HOVER,
		red: Color.RED,
		redHover: Color.RED_HOVER,
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
