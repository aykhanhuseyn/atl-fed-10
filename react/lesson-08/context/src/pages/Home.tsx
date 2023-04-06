import React from 'react';
import { Header } from '../Header';
import { useUser } from '../countext';
import { useCounter } from '../reducer';

export const Home = () => {
	const { logout } = useUser();

	const { state, dispatch } = useCounter();

	return (
		<div>
			<Header />
			<h3>count: {state.count}</h3>
			<h3>age: {state.age}</h3>
			<button
				onClick={() => {
					dispatch({ type: 'incrementCount' });
				}}
			>
				increment count
			</button>
			<button
				onClick={() => {
					dispatch({ type: 'decrementCount' });
				}}
			>
				decrement count
			</button>
			<button
				onClick={() => {
					dispatch({ type: 'incrementAge' });
				}}
			>
				increment age
			</button>
			<button
				onClick={() => {
					dispatch({ type: 'decrementAge' });
				}}
			>
				decrement age
			</button>
			<button
				onClick={() => {
					dispatch({ type: 'reset' });
				}}
			>
				reset
			</button>
			<br />
			<p>salam</p>
			<button onClick={logout}>log me out</button>
		</div>
	);
};
