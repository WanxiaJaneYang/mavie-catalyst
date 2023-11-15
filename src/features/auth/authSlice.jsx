/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
		user: null,
		accessToken: '',
		loading: false,
		error: '',
	},
	reducers: {
		loginRequest: (state) => {
			state.loading = true;
		},
		loginSuccess: (state, action) => {
			state.loading = false;
			state.isLoggedIn = true;
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
		},
		loginFailed: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.user = null;
			state.accessToken = '';
		},
	},
});

export const {
	loginRequest, loginSuccess, loginFailed, logout,
} =	authSlice.actions;

export default authSlice.reducer;
