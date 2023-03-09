import React from 'react';
import { Card } from './Class';
import './App.css';

function App() {
	const [show, setShow] = React.useState(true);
	const [name, setName] = React.useState('john');

	return (
		<div className='App'>
			<input
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					// // setShow(!show); // true => false
					// // setShow(!show); // true => false

					setShow((prev) => !prev); // true => false
					// setShow((prev) => !prev); // false => true
				}}
			>
				toggle
			</button>
			<h1>Card</h1>
			{show && <Card name={name} />}
		</div>
	);
}

export default App;
