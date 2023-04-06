import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './countext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<UserProvider>
			<App />
		</UserProvider>
	</BrowserRouter>,
);
