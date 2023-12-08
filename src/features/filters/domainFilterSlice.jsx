/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductFilter from '../../thunk/productFilterThunk';

const domainFilterSlice = createSlice({
	name: 'domainFilter',
	initialState: null,

	reducers: {
		setSelectedDomain: (state, { payload }) => {
			Object.keys(payload).forEach((key) => {
				state[key] = payload[key];
			});
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getProductFilter.fulfilled, (state, action) => {
			const domainList = action.payload.domains.reduce(
				(acc, domain) => {
					acc[domain.id] = true;
					return acc;
				},
				{},
			);
			state = domainList;
		});
	},

});

export const { setSelectedDomain } = domainFilterSlice.actions;

export default domainFilterSlice.reducer;
