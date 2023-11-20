/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const cookieSlice = createSlice({
	name: 'cookie',
	initialState: {
		allowCookie: false,
	},
	reducers: {
		allowCookie: (state) => {
			state.allowCookie = true;
		},
		disallowCookie: (state) => {
			state.allowCookie = false;
		},
	},
});

export const {
	allowCookie,
	disallowCookie,
} = cookieSlice.actions;

export default cookieSlice.reducer;
