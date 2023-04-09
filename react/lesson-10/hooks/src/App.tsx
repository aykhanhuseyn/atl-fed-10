import { useState, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import { Login } from './components/Login';
import { ProductsList } from './components/Products/List';
import { ProductView } from './components/Products/View';

function App() {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const login = useCallback(() => {
		setIsLoggedIn(true);
	}, []);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
		navigate('/login', {
			replace: true,
			state: {
				from: location.pathname,
			},
		});
	}, []);

	return (
		<div className='App'>
			{isLoggedIn ? (
				<Routes>
					<Route path='/' element={<Layout logout={logout} />}>
						<Route index element={<h1>Home</h1>} />
						<Route path='about' element={<h1>About</h1>} />
						<Route path='dashboard' element={<h1>Dashboard</h1>} />
						<Route
							path='products'
							// loader={async () => {
							// 	return await fetch('https://fakestoreapi.com/products').then((res) =>
							// 		res.json(),
							// 	);
							// }}
							element={<ProductsList />}
						/>
						<Route path='products/:id' element={<ProductView />} />
						<Route path='*' element={<h1>Not Found</h1>} />
					</Route>
				</Routes>
			) : (
				<Routes>
					<Route path='login' element={<Login login={login} />} />
					<Route path='register' element={<h1>Register</h1>} />
					<Route path='forgot' element={<h1>Forgot</h1>} />
					<Route path='*' element={<h1>Not Found</h1>} />
				</Routes>
			)}
		</div>
	);
}

export default App;
