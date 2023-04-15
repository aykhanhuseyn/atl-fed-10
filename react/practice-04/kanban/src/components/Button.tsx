import styled from 'styled-components';

interface ButtonProps {
	size?: 'L' | 'M';
}

export const Button = styled.button<ButtonProps>`
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.color};
	color: white;
	width: 100%;
	padding: ${({ size }) => (size === 'L' ? '16px' : '8px')};
	border: none;
	border-radius: 24px;
	cursor: pointer;
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 19px;
	text-align: center;
	/* background: #635fc7; */
`;
