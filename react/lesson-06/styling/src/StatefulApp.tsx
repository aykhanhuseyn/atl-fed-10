import { useState, useEffect } from 'react';
import { Button } from './components/Button';

// setState is async
// setState is batched
// setState is not merged

// setState accepts a function or a value to update the state

// useEffect is a hook that runs after every render
// with empty dependency array it runs after first render === AKA mount
// with no dependency array it runs after every render
// with dependency array it runs after first render and when the dependency changes

const getAge = () => 22;

const StatefulApp = () => {
	const [state, setState] = useState('initialState');
	const [count, setCount] = useState<number>();
	const [age, setAge] = useState<number>(getAge);

	// no dependency array
	// runs after every render
	useEffect(() => {
		console.log('component did mount and update');
	});

	// empty dependency array
	// runs after first render === AKA mount
	useEffect(() => {
		console.log('component did mount');

		// destroy === AKA unmount
		return () => {
			console.log('component will unmount');
		};
	}, []);

	// runs after first render and when count changes
	useEffect(() => {
		console.log('component did mount and count update', count);
	}, [count]);

	console.log('StatefulApp render', age);

	return (
		<div>
			<h1>Stateful App</h1>
			<h2>State: {state}</h2>
			<Button
				primary
				onClick={() => {
					console.log('Button click');
					setState('newState');
				}}
			>
				change state
			</Button>
			<hr />
			<h2>Count: {count}</h2>
			<h2>Age: {age}</h2>
			<Button
				block
				onClick={() => {
					console.log('Button click');
					// setCount((count ?? 0) + 1);
					// setCount((count ?? 0) + 1);

					setCount((prev) => (prev ?? 0) + 1);
					setCount((prev) => (prev ?? 0) + 1);

					// batch update
				}}
			>
				change count
			</Button>
		</div>
	);
};

export default StatefulApp;
