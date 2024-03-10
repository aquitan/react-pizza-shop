import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { AuthType } from '../types/login.type';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../api/API';
import { UserProfile } from '../types/user.type';

export const JWT_STATE = 'userData';

export type UserJwtState = {
	jwt: string | undefined
}

type UserState = {
	jwt: string | null
	loginErrorMessage?: string,
	user?: UserProfile;
}

const initialState: UserState = {
	jwt: loadState<UserJwtState>(JWT_STATE)?.jwt ?? null,
	user: undefined
};

export const login = createAsyncThunk('user/login', async (params: { email: string, password: string }) => {
	try {
		const { data } = await axios.post<AuthType>(`${PREFIX}/auth/login`, { email: params.email, password: params.password });
		return data;
	} catch (e) {
		if (e instanceof AxiosError) {
			throw new Error(e.response?.data.message);
		}
	}
});

export const getRegister = createAsyncThunk('user/register', async (params: { email: string, password: string, name: string }) => {
	try {
		const { data } = await axios.post<AuthType>(`${PREFIX}/auth/register`, { email: params.email, password: params.password, name: params.name });
		return data;
	} catch (e) {
		if (e instanceof AxiosError) {
			throw new Error(e.response?.data.message);
		}
	}

});

export const getProfile = createAsyncThunk('user/profile', async (params: { jwt: string | undefined }) => {
	try {
		const { data } = await axios.get<UserProfile>(`${PREFIX}/user/profile`, {
			headers: {
				'Authorization': `Bearer ${params.jwt}`
			}
		});
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

		builder.addCase(getRegister.fulfilled, (state, action) => {
			if (!action.payload) return;

			state.jwt = action.payload.access_token;
		});

		builder.addCase(getProfile.fulfilled, (state, action) => {
			state.user = action.payload;
		});

		builder.addCase(getRegister.rejected, (state, action) => {
			state.loginErrorMessage = action.error.message;
		});

		builder.addCase(login.rejected, (state, action) => {
			state.loginErrorMessage = action.error.message;
		});


	}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;