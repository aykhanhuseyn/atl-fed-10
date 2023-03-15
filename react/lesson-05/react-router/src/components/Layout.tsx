import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface LayoutProps {
	clasName?: string;
	children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<header>
				<h1>Header</h1>
				<nav>
					<ul>
						<li>
							<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : '')}
								to='/about'
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : '')}
								to='/non-existing-page-url'
							>
								go to error
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : '')}
								to='/news'
							>
								news index
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : '')}
								to='/news/kendde-shok-hadise-1'
							>
								news kendde shok hadise
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : '')}
								to='/news/sheherde-shok-hadise-2'
							>
								news kendde shok hadise
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : '')}
								to='/news/olkede-shok-hadise-3'
							>
								news kendde shok hadise
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main>{children}</main>
			<footer>copy 2023</footer>
		</>
	);
};
