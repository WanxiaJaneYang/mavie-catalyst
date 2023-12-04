/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductInfo from '../../thunk/productInfoThunk';

const brandSlice = createSlice({
	name: 'brand',
	initialState: {
		loading: false,
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

	extraReducers: (builder) => {
		builder
			.addCase(getProductInfo.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProductInfo.fulfilled, (state, action) => {
				state.loading = false;
				state.data.name = action.payload.brand;
				state.data.icon = action.payload.brandIcon;
			})
			.addCase(getProductInfo.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const {
	getBrands,
	getBrandsSuccess,
	getBrandsFailure,
} = brandSlice.actions;

export default brandSlice.reducer;
