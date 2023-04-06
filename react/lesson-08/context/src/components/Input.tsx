import { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	ayxan?: string;
}

const StyledInput = styled.input<InputProps>`
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 0.5rem;
`;

export const Input: FC<InputProps> = (props) => {
	return <StyledInput {...props} />;
};
