import { Box } from '@mui/material';
import { FormHTMLAttributes, useEffect, useCallback } from 'react';
import {
	UseFormReturn,
	FieldValues,
	FieldErrors,
	FormProvider,
} from 'react-hook-form';

interface FormProps<T extends FieldValues = FieldValues>
	extends Omit<FormHTMLAttributes<T>, 'onSubmit' | 'onError'> {
	methods: UseFormReturn<T>;
	onSubmit: (data: T) => void;
	onError: (errors: FieldErrors<T>) => void;
}

function Form<T extends FieldValues = FieldValues>({
	children,
	onSubmit,
	onError,
	methods,
}: FormProps<T>) {
	const handleError = useCallback(() => {
		if (methods?.formState?.errors) {
			onError(methods?.formState?.errors);
		}
	}, [methods?.formState?.errors, onError]);

	useEffect(() => {
		handleError();
	}, [methods?.formState?.errors, handleError]);

	return (
		<FormProvider {...methods}>
			<Box
				component='form'
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				{children}
			</Box>
		</FormProvider>
	);
}

export default Form;
