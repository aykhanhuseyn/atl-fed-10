import { useTranslation } from 'react-i18next';

export const Login = () => {
	const { t } = useTranslation('login');

	return (
		<div>
			<h1>{t('login')}</h1>
			<div>
				<label htmlFor='username'>{t('username')}</label>
				<input type='text' id='username' />
			</div>
			<div>
				<label htmlFor='password'>{t('password')}</label>
				<input type='password' id='password' />
			</div>
			<div>
				<button>Login</button>
			</div>
		</div>
	);
};
