import { useState } from 'react';
import { Card, AgeDetector } from './components';
import './App.css';

const arr = [
	{ name: 'Asya', id: 1 },
	{ name: 'Sahib', id: 2 },
	{ name: 'Nuray', id: 3 },
	{ name: 'Sabina', id: 4 },
	{ name: 'Valeh', id: 5 },
	{ name: 'Nijat', id: 6 },
];

function App() {
	const [array, setArray] = useState(arr);
	const [asc, setAsc] = useState(true);

	console.log(array);

	// React.createElement('div', 'div', { className: 'App' });
	return (
		<div className='App'>
			<button
				onClick={() => {
					setAsc(!asc);
					setArray(() => [
						...arr.sort((a, b) =>
							asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
						),
					]);
				}}
				style={{ marginBottom: '10px' }}
			>
				{asc ? 'Ascending' : 'Descending'}
			</button>
			{array.map((item, index) => {
				return <Card name={item.name} key={index} />;
			})}

			{/* {array.map((item) => (
				<Card name={item.name} key={item.id} />
			))} */}
			{array.map((item) => (
				<Card name={item.name} />
			))}

			<Card name='Aasdha' />
			{/* <AgeDetector name='Asya' birthYear={1995} /> */}

			{/* <Card name='asldaksjdhk' /> */}
		</div>
	);
}

export default App;
