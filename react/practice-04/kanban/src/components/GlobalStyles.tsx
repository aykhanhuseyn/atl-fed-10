import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: 'Plus Jakarta Sans', sans-serif;
		background-color: ${(props) => props.theme.backgroundColor};
		color: ${(props) => props.theme.textColor};
	}
`;
