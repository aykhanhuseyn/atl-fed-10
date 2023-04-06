import React, { useContext } from 'react';
import { UserContext } from '../countext';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';

export const Login = () => {
	const { login } = useContext(UserContext);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		console.log(email, password);

		login({ email, password });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Input ayxan='sda' disabled type='email' placeholder='Email' name='email' />
				<Input type='password' placeholder='********' name='password' />
				<Checkbox />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};
