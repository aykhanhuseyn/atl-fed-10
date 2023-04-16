import React from 'react';
import { useAppDispatch, login } from '../redux';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

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
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
					width: '300px',
					margin: '0 auto',
				}}
			>
				<Input
					label='Email'
					type='email'
					name='email'
					pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.edu(\.(az|ru))?$'
					placeholder='email@mail.com'
				/>
				<Input
					label='Password'
					type='password'
					name='password'
					placeholder='8 dene ulduzlu simvol'
				/>
				<Button type='submit'>Login</Button>
			</form>
		</div>
	);
};
