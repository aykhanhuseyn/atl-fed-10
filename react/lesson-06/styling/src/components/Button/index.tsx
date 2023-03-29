import styled from 'styled-components';

interface ButtonProps {
	primary?: boolean;
	block?: boolean;
}

export const Button = styled.button<ButtonProps>`
	background-color: ${({ primary }) => (primary ? '#4CAF50' : '#ffffff00')};
	color: ${({ primary }) => (primary ? '#fff' : '#4CAF50')};
	border: ${({ primary }) => (primary ? 'none' : '1px solid #4CAF50')};
	border-radius: 8px;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	width: ${({ block }) => (block ? '100%' : 'auto')};
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;

	&:hover {
		background-color: ${({ primary }) => (primary ? '#448847' : '#4caf4f50')};
	}
`;
