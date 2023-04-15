import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface LoginDTO {
	email: string;
	password: string;
}

export const login = createAsyncThunk(
	'auth/login',
	async (payload: LoginDTO, thunk) => {
		try {
			const response = await fetch('https://fakestoreapi.com/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			const data = await response.json();

			return data;
		} catch (error: any) {
			console.log('error', error);
			// return thunk.rejectWithValue(error?.message || null);
			return { token: 'some_token' };
		}
	},
);

interface AuthState {
	token: string | null;
	loading: boolean;
	error: string | null;
}

const initialState: AuthState = {
	token: null,
	loading: false,
	error: null,
};

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.token = null;
			state.error = null;
			state.loading = false;
		},
	},
	extraReducers(builder) {
		builder.addCase(login.pending, (state, action) => {
			console.log(action.payload);
			state.loading = true;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			console.log(action.payload);
			state.loading = false;
			state.token = action.payload.token;
			state.error = null;
		});
		builder.addCase(login.rejected, (state, action) => {
			console.log('reject', action.payload);
			state.loading = false;
			state.token = null;
			// state.error = action.payload;
		});
	},
});

export const { logout } = slice.actions;

export default slice.reducer;
