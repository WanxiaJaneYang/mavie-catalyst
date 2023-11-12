/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const domainFilterSlice = createSlice({
	name: 'domainFilter',
	initialState: {
		1: true,
		2: true,
		3: true,
		4: true,
		5: true,
		6: true,
		7: true,
		8: true,
	},

	reducers: {
		setSelectedDomain: (state, { payload }) => {
			Object.keys(payload).forEach((key) => {
				state[key] = payload[key];
			});
		},
	},
});

export const { setSelectedDomain } = domainFilterSlice.actions;

export default domainFilterSlice.reducer;
