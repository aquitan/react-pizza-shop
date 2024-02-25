import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const JWT_STATE = 'jwt';

type UserState = {
	jwt: string | null
}

const initialState: UserState = {
	jwt: loadState(JWT_STATE) ?? null
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addJwt: (state, action: PayloadAction<string>) => {
			state.jwt = action.payload;
		},
		logout: (state) => {
			state.jwt = null;
		}
	}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;