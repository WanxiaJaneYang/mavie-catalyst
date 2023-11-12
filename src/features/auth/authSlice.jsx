/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
		user: null, // {id:1,username:'admin',role:'admin',listProduct:[]},
	},
	reducers: {
		login(state, action) {
			state.isLoggedIn = true;
			state.user = action.payload;
		},
		logout(state) {
			state.isLoggedIn = false;
			state.user = null;
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
