import React from 'react';
import plt from './assets/plt.webp';
import react from './assets/react.svg';
import './main.scss';

const App = () => {
	const [count, setCount] = React.useState(0);

	return (
		<div
			style={{
				backgroundImage: `url(${plt})`,
				height: '100vh',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
		>
			<div
				style={{
					height: '100vh',
					backdropFilter: 'blur(5px)',
				}}
			>
				<h1>Hello Polat Alemdar!</h1>
				<p>Count: {count}</p>
				<button onClick={() => setCount(count + 1)}>Increment</button>
				<img src={react} alt='react' />
			</div>
		</div>
	);
};

export default App;
