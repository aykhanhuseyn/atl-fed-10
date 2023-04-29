import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
	// firstName: yup.string().nullable(),
	firstName: yup.string().required('First name is required'),
	// firstName: yup.string().when('$visible', {
	// 	is: (visible: boolean) => visible,
	// 	then: (y) => y.required('First name is required'),
	// 	otherwise: (y) => y.nullable(),
	// }),
	// firstName: yup
	// 	.string()
	// 	.when('$visible', ([visible], schema) =>
	// 		visible ? schema.required('First name is required') : schema.nullable(),
	// 	),
	lastName: yup.string().required('Last name is required'),
	email: yup.string().email('Email is not valid').required('Email is required'),
	password: yup
		.string()
		.min(6, 'Password should be longer than 5 sybols')
		.required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), ''], 'Passwords must match')
		.required('Confirm Password is required'),
});

export default yupResolver(schema);
