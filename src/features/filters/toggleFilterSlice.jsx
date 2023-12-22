/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RESET_STATE } from '../../constants';

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

	extraReducers: (builder) => {
		builder.addCase(RESET_STATE, (state) => {
			state.featuresOn = true;
			state.expertOpinionsOn = true;
		});
	},
});

export const { setFeaturesOn, setExpertOpinionsOn } = toggleFilterSlice.actions;

export default toggleFilterSlice.reducer;
