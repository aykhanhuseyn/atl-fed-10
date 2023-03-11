import React from 'react';
import type { FC } from 'react';
import type { Todo } from '../../App';
import { Checkbox } from '../Checkbox';
import './style.css';

interface CreateTodoProps {
	onSubmit: (value: Todo) => void;
}

export const CreateTodo: FC<CreateTodoProps> = ({ onSubmit }) => {
	const [checked, setChecked] = React.useState(false);
	const [value, setValue] = React.useState('');

	const submit = () => {
		const todo = {
			id: Math.random(),
			text: value,
			completed: checked,
		};

		onSubmit(todo);

		setValue('');
		setChecked(false);
	};

	// event handler
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			submit();
		}
	};

	const handleOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
		const specialChars = ['@', '&', '%', '$', '#', '!', '?'];

		// if no special characters are included in the input
		if (!specialChars.some((char) => e.target.value.includes(char))) {
			// set the value of the input to the value of the input
			setValue(e.target.value);
		}

		// setValue(e.target.value?.toUpperCase());
	};

	return (
		<div className='create'>
			<Checkbox
				checked={checked}
				change={(value) => {
					setChecked(value);
				}}
				className='create__checkbox'
			/>
			{/*
      U N C O N T R O L L E D  I N P U T
      <input
				type='text'
				className='create__input'
				placeholder='Create a new todo…'
				onKeyDown={handleKeyDown}
			/>
      */}

			{/*
      C O N T R O L L E D  I N P U T
      */}
			<input
				type='text'
				value={value}
				onChange={handleOnClick}
				className='create__input'
				placeholder='Create a new todo…'
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};
