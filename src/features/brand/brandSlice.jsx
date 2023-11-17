/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const brandSlice = createSlice({
	name: 'brand',
	initialState: {
		loading: true,
		error: null,
		data: {
			name: 'Spacetalk',
			icon: '',
		},
	},
	reducers: {
		getBrands: (state) => {
			state.loading = true;
		},
		getBrandsSuccess: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
		},
		getBrandsFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export const {
	getBrands,
	getBrandsSuccess,
	getBrandsFailure,
} = brandSlice.actions;

export default brandSlice.reducer;
