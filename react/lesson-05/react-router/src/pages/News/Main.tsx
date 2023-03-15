import { Outlet } from 'react-router-dom';

// is like nested layout for news pages
export const NewsMain = () => {
	return (
		<div
			style={{
				backgroundColor: 'red',
			}}
		>
			<h3>Main News</h3>
			<p>Some news</p>
			<div
				style={{
					backgroundColor: 'green',
				}}
			>
				<Outlet />
			</div>
			<p>footer for news</p>
		</div>
	);
};
