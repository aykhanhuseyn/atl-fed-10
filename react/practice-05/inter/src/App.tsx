import { useTranslation } from 'react-i18next';
import { Login } from './pages/Login';

function App() {
	const { t, i18n } = useTranslation();
	return (
		<>
			<h1>{t('welcome')}</h1>

			<select
				defaultValue={i18n.language}
				onChange={({ target: { value } }) => i18n.changeLanguage(value)}
			>
				<option value='az'>Azərbaycan</option>
				<option value='en'>English</option>
			</select>

			<Login />
		</>
	);
}

export default App;
