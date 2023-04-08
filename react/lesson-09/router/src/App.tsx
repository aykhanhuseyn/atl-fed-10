import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Loader } from './components';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const News = lazy(() => import('./pages/News'));

// #region Lazy load variants
// const Home = lazy(() =>
// 	import('./pages/Home').then((module) => ({ default: module.Home })),
// );

// const Home = lazy(() =>
// 	import('./pages').then((module) => ({ default: module.Home })),
// );
// #endregion

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<h1>React Router</h1>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route
						path='products'
						element={<Products />}
						loader={() => {
							console.log('fetching products from api');
						}}
						errorElement={<h1>Products Error</h1>}
					/>
					<Route path='news' element={<News />} errorElement={<h1>News Error</h1>} />
				</Route>

				{/* <Route path='news' element={<News />}> / news
          <Route path=':id' element={<NewsItem />} /> / news/:id
          <Route path='create' element={<CreateNews />} /> / news/create
          <Route path='categories' element={<NewsCategories />}> / news/categories
            <Route path=':id' element={<NewsCategory />} /> / news/categories/:id
            <Route path='create' element={<CreateCategory />} /> / news/categories/create
          </Route>
        </Route> */}
			</Routes>
		</Suspense>
	);
}

export default App;
