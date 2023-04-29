import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import resolver from './validationSchema';
import Form from './components/Form';
import Input from './components/Input';

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
};

function App() {
	const methods = useForm<FormValues>({
		defaultValues: {
			firstName: 'bill',
			lastName: 'luo',
			email: 'sas@sad.ss',
			password: 'test',
			confirmPassword: '',
		},
		resolver,
		shouldUseNativeValidation: false,
		shouldUnregister: true,
		// criteriaMode: 'firstError',
		// context: {
		// 	visible,
		// },
	});

	const onSubmit = (data: FormValues) => console.log('success', data);

	return (
		<Form methods={methods} onSubmit={onSubmit} onError={console.warn}>
			<Input label='First Name' name='firstName' />
			<Input label='Last Name' name='lastName' />
			<Input label='Email' name='email' />
			<Input.Password label='Password' name='password' />
			<Input.Password label='CornfirmPassword' name='confirmPassword' />

			<Button type='submit' variant='contained'>
				Submit
			</Button>
		</Form>
	);
}

export default App;
