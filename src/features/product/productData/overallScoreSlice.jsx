/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductRating from '../../../thunk/productMetricThunk';
import getProductInfo from '../../../thunk/productInfoThunk';

const overallScoreSlice = createSlice({
	name: 'overallScore',
	initialState: {
		loading: false,
		error: null,
		data: null,
	},

	reducers: {
	},

	extraReducers: (builder) => {
		builder
			.addCase(getProductInfo.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProductInfo.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload.overallRating;
			})
			.addCase(getProductInfo.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},

});

export default overallScoreSlice.reducer;
