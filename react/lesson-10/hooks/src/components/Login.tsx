import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LoginProps {
	login: () => void;
}

export const Login: FC<LoginProps> = ({ login }) => {
	const navigate = useNavigate();

	const location = useLocation();
	// on location change, the component will re-render

	console.log(location);

	return (
		<>
			<h1>Login</h1>
			<button
				onClick={() => {
					login();
					navigate(location.state.from, { state: { from: location.pathname } });
				}}
			>
				Login
			</button>
		</>
	);
};
