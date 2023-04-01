import { useState } from 'react';

export interface Props {
	onClick?: () => void;
	appCount?: number;
	arr?: number[];
}

function Alma({ onClick, appCount, arr }: Props) {
	const [count, setCount] = useState(0);

	console.log('Alma Non Memo rendered');

	return (
		<div>
			<h2>Alma Non Memo</h2>
			<p>app count: {appCount}</p>
			<button onClick={onClick}>click me</button>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				upd count {count}
			</button>
		</div>
	);
}

export default Alma;
