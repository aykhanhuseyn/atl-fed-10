import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { LoggedInRoutes, NotLoggedInRoutes } from './ValidatedRoutes';

export const router = createBrowserRouter([
	{
		path: '*',
		element: <LoggedInRoutes />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '*',
				element: <Navigate to='/' />,
			},
		],
	},
	{
		path: '*',
		element: <NotLoggedInRoutes />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				// element: <Register />
				element: <div>register</div>,
			},
			{
				path: '*',
				element: <Navigate to='/login' />,
			},
		],
	},
]);
