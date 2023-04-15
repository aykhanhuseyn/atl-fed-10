import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useAppDispatch, useAppSelector, toggleTheme } from './redux';
import { ThemeMode } from './constants/colors';
import { Button } from './components/Button';
import { router } from './router';

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
		background-color: ${(props) => props.theme.bg};
		color: ${(props) => props.theme.color};
	}
`;

function App() {
	const dispatch = useAppDispatch();
	const { dark, light, mode } = useAppSelector((state) => state.theme);

	return (
		<ThemeProvider theme={mode === ThemeMode.DARK ? dark : light}>
			<GlobalStyle />
			<Button
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
