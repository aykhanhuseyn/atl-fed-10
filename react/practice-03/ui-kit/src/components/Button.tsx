import styled from 'styled-components';

interface ButtonProps {
	tip?: 'primary' | 'secondary' | 'link';
	size?: 'medium' | 'large';
	addonBefore?: React.ReactNode;
	addonAfter?: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border: none;
	border-radius: 0;
	cursor: pointer;
	/* margin: 20px; */

	${({ size }) => {
		if (size === 'large') {
			return `
        padding: 12px 24px;
        gap: 8px;
      `;
		}
		return `
    padding: 8px 24px;
    gap: 10px;
    `;
	}}

	${({ tip }) => {
		if (tip === 'primary') {
			return `
        background-color: #000000;
        color: #ffffff;
      `;
		}

		if (tip === 'secondary') {
			return `
        border: 1px solid #000000;
      `;
		}

		return `
      background-color: transparent;
      color: #000000;
    `;
	}}

  ::before {
		content: ${({ addonBefore }) => (addonBefore ? `"${addonBefore}"` : 'none')};
	}
	::after {
		content: ${({ addonAfter }) => (addonAfter ? `"${addonAfter}"` : 'none')};
	}
`;

const Button = ({
	// addonAfter,
	// addonBefore,
	children,
	...props
}: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) => {
	// do functional stuff here

	return (
		<StyledButton {...props}>
			{/* {addonBefore} */}
			{children}
			{/* {addonAfter} */}
		</StyledButton>
	);
};

export default Button;
