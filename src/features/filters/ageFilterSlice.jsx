/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RESET_STATE } from '../../constants';

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
	extraReducers: (builder) => {
		builder.addCase(RESET_STATE, (state) => {
			state.minAge = 65;
			state.maxAge = 100;
		});
	},

});

export const { setMinAge, setMaxAge } = ageFilterSlice.actions;

export default ageFilterSlice.reducer;
