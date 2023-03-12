import React from 'react';
import logo from '../../assets/logo.png';
import { menuItems, langItems } from './data';
import './style.css';

export const Header = () => {
	return (
		<header className='header'>
			<a href='/'>
				<img className='header__logo' src={logo} alt='logo' />
			</a>

			<nav className='header__nav'>
				<ul>
					{menuItems.map((item, index) => (
						<li key={index}>
							<a
								href={item.link}
								className={window.location.pathname === item.link ? 'active' : ''}
							>
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</nav>

			<div className='header__action'>
				<select className='header__action__lang'>
					{langItems.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
				<button className='header__action__register'>Register</button>
			</div>
		</header>
	);
};
