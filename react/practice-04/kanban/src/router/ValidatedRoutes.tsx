import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux';

export const LoggedInRoutes = () => {
	const isLoggedIn = useAppSelector((state) => state.auth.token);

	if (!isLoggedIn) {
		return <Navigate to='/login' />;
	}

	return <Outlet />;
};

export const NotLoggedInRoutes = () => {
	const isLoggedIn = useAppSelector((state) => state.auth.token);

	if (isLoggedIn) {
		return <Navigate to='/' />;
	}

	return <Outlet />;
};
