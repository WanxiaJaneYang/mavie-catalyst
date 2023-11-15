/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../constants';

const shareSlice = createSlice({
	name: 'share',
	initialState: {
		loading: false,
		error: false,
		success: false,
		errorMessage: null,
	},
	reducers: {
		resetShare: (state) => {
			state.loading = false;
			state.error = null;
			state.success = false;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(share.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.success = false;
			})

			.addCase(share.fulfilled, (state) => {
				state.loading = false;
				state.error = null;
				state.success = true;
			})

			.addCase(share.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.success = false;
			});
	},
});

export const share = createAsyncThunk('share', async (data, thunkAPI) => {
	const state = thunkAPI.getState();
	const { productId } = state.product.productInfo.productDetail;
	const { accessToken } = state.auth.accessToken;
	const URL = `${API_BASE_URL}/product/${productId}/share`;
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${accessToken}`,
	};

	try {
		await axios.post(URL, data, { headers });
		// store the new refreshed access token
		// dispatch(setAccessToken(response.data.accessToken));
		// display the success message
		return true;
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

export const { resetShare } = shareSlice.actions;

export default shareSlice.reducer;
