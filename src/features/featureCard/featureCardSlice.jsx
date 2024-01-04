/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getFeatureScoreDetail from '../../thunk/featureSocreDetailThunk';

const FeatureCardSlice = createSlice({
	name: 'FeatureCard',
	initialState: {
		loading: false,
		error: null,
		explanationOn: false,
		array: [],
	},
	reducers: {
		setExplanationOn: (state, { payload }) => {
			state.explanationOn = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getFeatureScoreDetail.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.array = [];
			})
			.addCase(getFeatureScoreDetail.fulfilled, (state, action) => {
				state.loading = false;
				state.array = action.payload.features;
			})
			.addCase(getFeatureScoreDetail.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.array = [];
			});
	},
});

export const { setExplanationOn } = FeatureCardSlice.actions;

export default FeatureCardSlice.reducer;
