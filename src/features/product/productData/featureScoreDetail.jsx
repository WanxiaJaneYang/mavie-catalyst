/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getFeatureScoreDetail from '../../../thunk/featureSocreDetailThunk';

const featureScoreDetailSlice = createSlice({
	name: 'featureScoreDetail',
	initialState: {
		loading: false,
		error: null,
		questionImportance: null,
		// questionImportance: [0.2, 0.2, 0.3, 0.1, 0.2],
	},

	reducers: {
		// getFeatureScoreDetail: (state) => {
		// 	state.loading = true;
		// },
		// getFeatureScoreDetailSuccess: (state, { payload }) => {
		// 	state.loading = false;
		// 	state.featureScoreDetail = payload;
		// },
		// getFeatureScoreDetailFailure: (state, { payload }) => {
		// 	state.loading = false;
		// 	state.error = payload;
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(getFeatureScoreDetail.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getFeatureScoreDetail.fulfilled, (state, action) => {
				state.loading = false;
				state.questionImportance = action.payload.features.map((feature) => feature.importance);
			})
			.addCase(getFeatureScoreDetail.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},

});

// export const {
// 	// getFeatureScoreDetail,
// 	// getFeatureScoreDetailSuccess,
// 	// getFeatureScoreDetailFailure,
// } = featureScoreDetailSlice.actions;

export default featureScoreDetailSlice.reducer;
