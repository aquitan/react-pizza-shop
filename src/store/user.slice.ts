import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { LoginType } from '../types/login.type';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../api/API';

export const JWT_STATE = 'jwt';

type UserState = {
	jwt: string | null
	loginErrorMessage?: string
}

const initialState: UserState = {
	jwt: loadState(JWT_STATE) ?? null
};

export const login = createAsyncThunk('user/login', async (params: { email: string, password: string }) => {
	try {
		const { data } = await axios.post<LoginType>(`${PREFIX}/auth/login`, { email: params.email, password: params.password });
		return data;
	} catch (e) {
		if (e instanceof AxiosError) {
			throw new Error(e.response?.data.message);
		}
	}
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			state.jwt = null;
		},
		clearLoginError: (state) => {
			state.loginErrorMessage = undefined;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			if (!action.payload) {
				return;
			}
			state.jwt = action.payload.access_token;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.loginErrorMessage = action.error.message;
		});
	}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;