import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [age, setAge] = useState(0);

	return (
		<div>
			<div>
				<h1>Count: {count}</h1>
			</div>
			<div>
				<button
					className='asdas'
					onClick={() => {
						setCount(count + 1);
					}}
					style={{
						color: 'red',
						marginBlockEnd: '10px',
					}}
				>
					increment
				</button>
			</div>
			<div>
				<button
					onClick={() => {
						setCount(count - 1);
					}}
				>
					decrement
				</button>
			</div>
			<div
				style={{
					margin: '10px',
				}}
			>
				<h1>Age: {age}</h1>
				<button
					style={{
						// border-top-right-radius: 0;
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
					}}
					onClick={() => setAge(age < 18 ? age + 1 : 18)}
				>
					+
				</button>
				<button
					style={{
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
					}}
					onClick={() => setAge(age ? age - 1 : 0)}
				>
					-
				</button>
			</div>
		</div>
	);
}

export default App;
