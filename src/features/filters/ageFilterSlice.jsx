/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const ageFilterSlice = createSlice({
	name: 'ageFilter',
	initialState: {
		minAge: 65,
		maxAge: 100,

	},
	reducers: {
		setMinAge: (state, action) => {
			state.minAge = action.payload;
		},
		setMaxAge: (state, action) => {
			state.maxAge = action.payload;
		},
	},
});

export const { setMinAge, setMaxAge } = ageFilterSlice.actions;

export default ageFilterSlice.reducer;
