import { FC, memo } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';

interface LayoutProps {
	logout: () => void;
}

export const Layout: FC<LayoutProps> = ({ logout }) => {
	console.log('Layout render');

	return (
		<>
			<header>
				<span>Logo</span>
				<nav>
					<NavLink to='/' end>
						Home
					</NavLink>
					<NavLink to='about'>About</NavLink>
					<NavLink to='dashboard'>Dashboard</NavLink>
					<NavLink to='products'>Products list</NavLink>
				</nav>
				<Breadcrumb />
				<button
					onClick={() => {
						logout();

						// stack => ['/', '/about', '/dashboard']
						// navigate('/login');
						// stack => ['/', '/about', '/dashboard', '/login']

						// stack => ['/', '/about', '/dashboard']
						// navigate('/login', { replace: true });
						// stack => ['/', '/about', '/login']
					}}
				>
					Logout
				</button>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>&copy; {new Date().getFullYear()}</footer>
		</>
	);
};

export default memo(Layout);
