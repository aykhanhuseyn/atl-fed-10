import { useState } from 'react';
import moon from '../../assets/Moon.svg';
import sun from '../../assets/Sun.svg';
import './style.css';

export const Header = () => {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<header className='header'>
			<h1 className='header__title'>TODO</h1>
			<button
				className='header__button'
				onClick={() => {
					setDarkMode((prevMode) => !prevMode);
				}}
			>
				<img className='header__image' src={darkMode ? sun : moon} alt='moon' />
			</button>
		</header>
	);
};
