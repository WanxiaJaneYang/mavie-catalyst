/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductRating from '../../../thunk/productMetricThunk';

const productDomainsSlice = createSlice({
	name: 'productDomains',
	initialState: {
		loading: false,
		error: null,
		data: {
			1: 4.5,
			2: 4.3,
			3: 4.2,
			4: 2.5,
			5: 1.5,
			6: 5,
			7: 4.5,
			8: 3.5,
		},
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
				const newData = action.payload.domainRatings.reduce((acc, domain) => {
					acc[domain.id] = domain.rating;
					return acc;
				}, {});
				state.data = newData;
			})
			.addCase(getProductRating.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},

});

export const {
	getDomains,
	getDomainsSuccess,
	getDomainsFailure,
} = productDomainsSlice.actions;

export default productDomainsSlice.reducer;
