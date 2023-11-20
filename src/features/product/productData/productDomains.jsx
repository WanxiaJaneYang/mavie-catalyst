/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const productDomainsSlice = createSlice({
	name: 'productDomains',
	initialState: {
		loading: true,
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
		getDomains: (state) => {
			state.loading = true;
		},
		getDomainsSuccess: (state, { payload }) => {
			state.loading = false;
			state.productDomains = payload;
		},
		getDomainsFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},

});

export const {
	getDomains,
	getDomainsSuccess,
	getDomainsFailure,
} = productDomainsSlice.actions;

export default productDomainsSlice.reducer;
