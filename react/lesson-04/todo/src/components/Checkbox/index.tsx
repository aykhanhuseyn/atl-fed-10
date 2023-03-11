import type { FC } from 'react';
import check from '../../assets/Check.png';
import './style.css';

interface CheckboxProps {
	checked: boolean;
	change: (value: boolean) => void;
	className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
	checked,
	change,
	className = '',
}) => {
	return (
		<div
			onClick={() => {
				change(!checked);
			}}
			className={`checkbox ${checked ? 'checkbox--checked' : ''} ${className}`}
		>
			{checked && <img src={check} alt='check' />}
		</div>
	);
};
