/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RESET_STATE } from '../../constants';

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

	extraReducers: (builder) => {
		builder.addCase(RESET_STATE, (state) => {
			state.selectedGender = {
				male: true,
				female: true,
			};
		});
	},
});

export const { setSelectedGender } = personaFilterSlice.actions;

export default personaFilterSlice.reducer;
