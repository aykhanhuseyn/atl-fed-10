import { useState } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const StyledCheckboxInput = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;

const StyledCheckboxCheckmark = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: #eee;
	border-radius: 4px;
`;

const StyledCheckboxCheckmarkChecked = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: #2196f3;
	border-radius: 4px;
	&:after {
		content: '';
		position: absolute;
		display: block;
		left: 9px;
		top: 5px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		transform: rotate(45deg);
	}
`;

interface CheckboxProps {
	defaultChecked?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
	defaultChecked,
	onChange,
}) => {
	const [internalChecked, setChecked] = useState(defaultChecked);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);
		onChange?.(e);
	};

	return (
		<StyledCheckbox
			onClick={() => {
				setChecked((p) => !p);
			}}
		>
			<StyledCheckboxInput
				type='checkbox'
				tabIndex={-1}
				checked={internalChecked}
				onChange={handleChange}
			/>
			<StyledCheckboxCheckmark>
				{internalChecked && <StyledCheckboxCheckmarkChecked />}
			</StyledCheckboxCheckmark>
		</StyledCheckbox>
	);
};
