/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const personaFilterSlice = createSlice({
	name: 'genderFilter',
	initialState: {
		selectedGender: {
			male: true,
			female: true,
		},
	},

	reducers: {
		setSelectedGender(state, action) {
			state.selectedGender = action.payload;
		},
	},
});

export const { setSelectedGender } = personaFilterSlice.actions;

export default personaFilterSlice.reducer;
