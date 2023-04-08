import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
	return (
		<>
			<header>
				<h1>React Router Layout Header</h1>
				<nav
					style={{
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
						height: '50px',
					}}
				>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='about'>About</NavLink>
					<NavLink to='products'>Products</NavLink>
					<NavLink to='news'>News</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<h1>React Router Layout Footer</h1>
			</footer>
		</>
	);
};
