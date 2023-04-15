import React from 'react';
import { useAppDispatch, login } from '../redux';
import { Button } from '../components/Button';

export const Login = () => {
	const dispatch = useAppDispatch();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		new FormData();
		const form = new FormData(event.currentTarget);
		const email = form.get('email') as string;
		const password = form.get('password') as string;

		console.log('handleSubmit', email, password);

		if (email && password) {
			dispatch(login({ email, password }));
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' />
				</div>
				<Button type='submit'>Login</Button>
			</form>
		</div>
	);
};
