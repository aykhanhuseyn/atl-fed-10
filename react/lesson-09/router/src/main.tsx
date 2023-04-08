import ReactDOM from 'react-dom/client';
import { RouterProvider, BrowserRouter } from 'react-router-dom';
import { router } from './router';
import App from './App';
import './styles/main.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);

// root.render(<RouterProvider router={router} />);
