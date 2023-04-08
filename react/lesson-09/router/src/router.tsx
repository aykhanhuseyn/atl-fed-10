import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				// path: '/',
				index: true,
				// element: <Home />,
				async lazy() {
					const { Home } = await import('./pages/Home');
					return {
						Component: Home,
					};
				},
			},
			{
				path: 'about',
				// element: <About />,
				async lazy() {
					const { About } = await import('./pages/About');
					return {
						Component: About,
					};
				},
			},
			{
				path: 'products',
				// element: <About />,
				async lazy() {
					const { Products } = await import('./pages/Products');
					return {
						Component: Products,
					};
				},
				async loader() {
					const result = await fetch('https://fakestoreapi.com/products');
					const json = await result.json();
					return json;
				},
				// loader
			},
			{
				path: 'news',
				// element: <About />,
				async lazy() {
					const { News } = await import('./pages/News');
					return {
						Component: News,
					};
				},
				errorElement: <h1>News Error</h1>,
			},
		],
	},
]);
