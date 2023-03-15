import { useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { Layout } from './components';
import { Home, About, NotFound, NewsMain, NewsList, NewsBlog } from './pages';

var a = {
	news: {
		root1: '',
		root3: 'mahmud-qurbanov',
		root2: ':slag',
	},
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />

				{/* <Route path='news' element={<NewsList />} />
				<Route path='news/:slag' element={<NewsBlog />} /> */}

				<Route path='news' element={<NewsMain />}>
					{/* news + / + '' => news */}
					<Route path='' element={<NewsList />} />
					{/* <Route index element={<NewsList />} /> */}
					<Route path='mahmud-qurbanov' element={<h2>mahmud</h2>} />
					<Route path=':slag' element={<NewsBlog />} />
				</Route>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;

{
	/* 
				<Route path='news' element={<NewsMain />}>
					<Route index element={<NewsList />} />
					<Route path=':slag' element={<NewsBlog />} />
				</Route>
				*/
}
