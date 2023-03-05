import './Footer.css';

export const Footer = () => {
	return (
		<footer className='footer'>
			<h2>&copy; {new Date().getFullYear()}</h2>
		</footer>
	);
};
