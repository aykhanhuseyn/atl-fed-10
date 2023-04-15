import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux';
import App from './App';

const rootElement = document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
