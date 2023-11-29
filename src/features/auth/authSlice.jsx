/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../constants';

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
			state.accessToken = null;
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
				state.userId = action.payload.userId;
				state.accessToken = action.payload.accessToken;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
	const URL = `${API_BASE_URL}/login`;
	const headers = {
		'Content-Type': 'application/json',
	};

	try {
		// const response = await axios.post(URL, data, { headers });
		// // store the new refreshed access token
		// // dispatch(setAccessToken(response.data.accessToken));
		// // display the success message
		// // write the refresh token at the cookie
		// return response.data;
		return {
			userId: 1,
			accessToken: '123456789',
		};
	} catch (error) {
		if (!error.response) {
			return thunkAPI.rejectWithValue(error.message);
		}
		if (error.response.status === 404) {
			return thunkAPI.rejectWithValue('404 Not Found');
		}
		if (error.response.data && error.response.data.message) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
		return thunkAPI.rejectWithValue('Something went wrong. Please try again later.');
	}
});

export const {
	logout,
	resetProcess,
} =	authSlice.actions;

export default authSlice.reducer;
