import { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
	position: relative;
`;

const LabelStyled = styled.label`
	font-weight: 700;
	font-size: 12px;
	line-height: 15px;
	margin-bottom: 8px;
	color: #828fa3;
	color: ${({ theme }) => theme.labelColor};
`;

const InputStyled = styled.input`
	width: 100%;
	background: ${({ theme }) => theme.backgroundColor};
	border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: 4px;
	padding: 8px 16px;
	position: relative;

	&:focus,
	&:hover,
	&:active {
		outline: none;
		border-color: ${({ theme }) => theme.purple};
	}

	&::placeholder {
		color: ${({ theme }) => theme.textColor};
		opacity: 0.25;
	}

	&:invalid {
		border-color: ${({ theme }) => theme.red};
	}

	&:is(:invalid) ~ p {
		display: block;
	}
`;

const ErrorText = styled.p`
	color: ${({ theme }) => theme.red};
	margin: 0;
	font-weight: 500;
	font-size: 13px;
	line-height: 23px;
	text-align: right;
	display: none;
	position: absolute;
	right: 16px;
	bottom: 6px;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export const Input: FC<InputProps> = ({ label, id, ...rest }) => {
	return (
		<InputBox>
			<LabelStyled htmlFor={id}>{label}</LabelStyled>
			<InputStyled id={id} {...rest} />
			<ErrorText>Salam</ErrorText>
		</InputBox>
	);
};

// <Input label='sadfsf' name='sdfsdf' />
