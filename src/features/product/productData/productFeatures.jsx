/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const productFeaturesSlice = createSlice({
	name: 'productFeatures',
	initialState: {
		loading: false,
		error: null,
		productFeatures: {
			1: 2.5,
			2: 4.5,
			3: 2.5,
			4: 3.5,
			5: 1.5,
			6: 4.2,
			7: 3.5,
			8: 1.8,
			9: 4.5,
			10: 3.5,
		},

	},
	reducers: {
		getFeatures: (state) => {
			state.loading = true;
		},
		getFeaturesSuccess: (state, { payload }) => {
			state.loading = false;
			state.productFeatures = payload;
		},
		getFeaturesFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},

});

export const {
	getFeatures,
	getFeaturesSuccess,
	getFeaturesFailure,
} = productFeaturesSlice.actions;

export default productFeaturesSlice.reducer;
