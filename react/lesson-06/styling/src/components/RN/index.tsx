import type { CSSProperties } from 'react';
// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });

const styles: Record<string, CSSProperties> = {
	container: {
		color: 'blue',
		fontSize: '2rem',
		fontWeight: 'bold',
	},
};

// no hover effect

export const InlineFakeReactNative = () => {
	return (
		<h2
			style={{
				color: 'red',
				fontSize: '2rem',
				...styles.container,
			}}
		>
			InlineFakeReactNative
		</h2>
	);
};
