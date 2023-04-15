import { Button } from '../components/Button';
import { logout, useAppDispatch } from '../redux';

export const Home = () => {
	const dispatch = useAppDispatch();

	return (
		<div>
			<h1>Home</h1>
			<Button
				onClick={() => {
					dispatch(logout());
				}}
			>
				log out
			</Button>
		</div>
	);
};
