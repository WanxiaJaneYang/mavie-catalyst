/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const toggleFilterSlice = createSlice({
	name: 'toggleFilter',

	initialState: {
		featuresOn: true,
		expertOpinionsOn: true,
	},

	reducers: {
		setFeaturesOn(state, action) {
			state.featuresOn = action.payload;
		},
		setExpertOpinionsOn(state, action) {
			state.expertOpinionsOn = action.payload;
		},
	},
});

export const { setFeaturesOn, setExpertOpinionsOn } = toggleFilterSlice.actions;

export default toggleFilterSlice.reducer;
