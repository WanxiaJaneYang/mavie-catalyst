/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductRating from '../../../thunk/productMetricThunk';

const featureScoreDetailSlice = createSlice({
	name: 'featureScoreDetail',
	initialState: {
		loading: false,
		error: null,
		data: null,
	},

	reducers: {
	},

	extraReducers: (builder) => {
		builder
			.addCase(getProductRating.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProductRating.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload.overallRating;
			})
			.addCase(getProductRating.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},

});

export default featureScoreDetailSlice.reducer;
