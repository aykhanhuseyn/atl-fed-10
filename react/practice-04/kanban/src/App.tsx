import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useAppDispatch, useAppSelector, toggleTheme } from './redux';
import { GlobalStyle } from './components/GlobalStyles';
import { Button } from './components/Button';
import { ThemeMode } from './constants/colors';
import { router } from './router';

function App() {
	const dispatch = useAppDispatch();
	const { dark, light, mode } = useAppSelector((state) => state.theme);

	return (
		<ThemeProvider theme={mode === ThemeMode.DARK ? dark : light}>
			<GlobalStyle />
			<Button
				kind='secondary'
				size='L'
				onClick={() => {
					dispatch(toggleTheme());
				}}
			>
				toggle theme
			</Button>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
