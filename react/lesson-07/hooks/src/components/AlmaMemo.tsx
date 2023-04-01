import { useState, memo } from 'react';

export interface Props {
	onClick?: () => void;
	appCount?: number;
	arr?: number[];
}

function Alma({ onClick, appCount, arr }: Props) {
	const [count, setCount] = useState(0);

	console.log('Alma Memo rendered');

	return (
		<div>
			<h2>Alma Memo</h2>
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

// higher order component
export default memo(Alma);
