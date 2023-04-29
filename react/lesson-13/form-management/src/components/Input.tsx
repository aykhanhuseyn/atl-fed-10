import { ReactNode, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormContext, Controller } from 'react-hook-form';
import {
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	OutlinedInputProps,
	TextField,
	TextFieldProps,
} from '@mui/material';

type InputProps = TextFieldProps & {
	name: string;
};

function Input({ name, defaultValue, ...props }: InputProps) {
	const methods = useFormContext();

	return (
		<Controller
			name={name}
			defaultValue={defaultValue}
			control={methods.control}
			render={({ field, fieldState: { error } }) => {
				return (
					<TextField
						error={Boolean(error)}
						helperText={error?.message as ReactNode}
						{...field}
						{...props}
					/>
				);
			}}
		/>
	);
}

type PasswordProps = OutlinedInputProps & {
	name: string;
};

function PasswordInput({ label, name, defaultValue, ...props }: PasswordProps) {
	const [visble, setVisible] = useState(false);
	const methods = useFormContext();

	return (
		<Controller
			name={name}
			defaultValue={defaultValue}
			control={methods.control}
			render={({ field, fieldState: { error } }) => {
				return (
					<FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
						<InputLabel htmlFor={`outlined-adornment-${name}`}>{label}</InputLabel>
						<OutlinedInput
							id={`outlined-adornment-${name}`}
							type={visble ? 'text' : 'password'}
							{...field}
							{...props}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										aria-label='toggle password visibility'
										onClick={() => setVisible((prev) => !prev)}
										onMouseDown={() => setVisible((prev) => !prev)}
										edge='end'
									>
										{visble ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label={label}
						/>
						<FormHelperText error={Boolean(error)}>
							{error?.message as ReactNode}
						</FormHelperText>
					</FormControl>
				);
			}}
		/>
	);
}

// compoud components
Input.Password = PasswordInput;

export default Input;
