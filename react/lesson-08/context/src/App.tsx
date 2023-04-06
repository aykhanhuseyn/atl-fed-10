import { Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from './countext';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';

function App() {
	const { user } = useUser();
	// preserve user state in local storage
	//
	return (
		<>
			{user === null ? (
				<Routes>
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='*' element={<Navigate to='/login' />} />
				</Routes>
			) : (
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			)}
		</>
	);
}

export default App;
