import { useState } from 'react';
import './Header.css';
import { Cart } from '../Cart';

export const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className='header'>
			<h1>My products app</h1>
			<div className={`drawer ${open ? 'active' : ''}`}>
				<button onClick={() => setOpen(false)}>X</button>
				<Cart />
			</div>
			<button onClick={() => setOpen(true)}>open</button>
		</header>
	);
};
