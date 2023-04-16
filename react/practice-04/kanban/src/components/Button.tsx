import styled from 'styled-components';

interface ButtonProps {
	size?: 'L' | 'M';
	kind?: 'primary' | 'secondary' | 'danger';
}

export const Button = styled.button<ButtonProps>`
	background-color: ${({ theme, kind = 'primary' }) => {
		if (kind === 'primary') return theme.purple;
		if (kind === 'secondary') return theme.secondary;
		if (kind === 'danger') return theme.red;
	}};
	color: ${({ theme, kind = 'primary' }) => {
		if (kind === 'primary') return theme.white;
		if (kind === 'secondary') return theme.purple;
		if (kind === 'danger') return theme.white;
	}};
	transition: all 0.2s ease-in-out;
	width: 100%;
	padding: ${({ size }) => (size === 'L' ? '16px' : '8px')};
	border: none;
	cursor: pointer;
	font-style: normal;
	font-weight: 700;

	${({ size }) => {
		if (size === 'L') {
			return `
				font-size: 15px;
				line-height: 19px;
				border-radius: 24px;
			`;
		} else {
			return `
				font-size: 13px;
				line-height: 23px;
				border-radius: 20px;
			`;
		}
	}}

	text-align: center;

	&:hover {
		background-color: ${({ theme, kind = 'primary' }) => {
			if (kind === 'primary') return theme.purpleHover;
			if (kind === 'secondary') return theme.secondaryHover;
			if (kind === 'danger') return theme.redHover;
		}};
	}
`;
