import { Container } from '../Container';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = ({ children }) => {
	const handleClick = (id) => {};
	return (
		<>
			<Container>
				<Header />
				{window.location.pathname !== '/' && <h3>i am breadcrumb</h3>}
				<div
				// onClick={() => {}}
				// onClick={handleClick}
				// // onClick={handleClick(3)}
				// onClick={() => handleClick(3)}
				>
					sad
				</div>
			</Container>
			{children}
			<Footer />
		</>
	);
};
