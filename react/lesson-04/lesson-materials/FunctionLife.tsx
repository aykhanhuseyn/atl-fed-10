import { useEffect, useState } from 'react';

export const FunctionLife = () => {
	const [age, setAge] = useState(0);
	const [count, setCount] = useState(0);

	// componentDidMount
	useEffect(() => {
		console.log('useEffect mounted');
	}, []);

	// componentDidUpdate
	useEffect(() => {
		console.log('useEffect updated age');
	}, [age]);

	// componentDidUpdate
	useEffect(() => {
		console.log('useEffect updated count');
	}, [count]);

	// componentDidUpdate
	useEffect(() => {
		console.log('useEffect updated age & count');
	}, [age, count]);

	// componentWillUnmount
	useEffect(() => {
		return () => {
			console.log('useEffect unmounted');
		};
	}, []);

	// render
	console.log('rendered');

	return (
		<div>
			<h2>Function Life</h2>
			<button
				onClick={() => {
					setAge(age + 1);
				}}
			>
				increment age
			</button>
			<h3>{age}</h3>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				increment count
			</button>
			<h3>{count}</h3>
		</div>
	);
};
