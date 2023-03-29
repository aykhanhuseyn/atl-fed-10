import type { CSSProperties } from 'react';

const styles: CSSProperties = {
	color: 'blue',
	fontSize: '2rem',
	fontWeight: 'bold',
};

// no hover effect

export const Inline = () => {
	return (
		<h2
			style={{
				color: 'red',
				fontSize: '2rem',
				// color: red,
				// font-size: 2rem,
				...styles,
			}}
		>
			Inline
		</h2>
	);
};
