import { useUser } from './countext';

export const Header = () => {
	const { user } = useUser();

	return (
		<div>
			<h1>Header</h1>
			<h2>{user?.name}</h2>
			<h2>{user?.email}</h2>
		</div>
	);
};
