import { useEffect } from 'react';

// this is a global variable
// not a state
let alma = 0;

type CardProps = {
	name: string;
};

export const Card = ({ name }: CardProps) => {
	// this code will be executed every time the component is mounted
	useEffect(() => {
		console.log('Card is rendered');
	}, []);

	return (
		<div>
			<button
				onClick={() => {
					alma++;
					console.log(alma);
				}}
			>
				Click me {alma}
			</button>
			<h2>Hello {name}, I am Card</h2>
		</div>
	);
};

// export default Card;
