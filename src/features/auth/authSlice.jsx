/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import login from '../../thunk/authThunk';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
		userId: null,
		loading: false,
		error: null,
		success: null,
	},
	reducers: {
		logout: (state) => {
			state.isLoggedIn = false;
			state.userId = null;
			state.success = null;
		},

		resetProcess: (state) => {
			state.error = null;
			state.success = null;
			state.loading = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false;
				state.isLoggedIn = true;
				state.userId = action.payload.user_id;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const {
	logout,
	resetProcess,
} =	authSlice.actions;

export default authSlice.reducer;
