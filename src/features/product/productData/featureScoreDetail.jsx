/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getFeatureScoreDetail from '../../../thunk/featureSocreDetailThunk';

const featureScoreDetailSlice = createSlice({
	name: 'featureScoreDetail',
	initialState: {
		loading: false,
		error: false,
		questionImportance: null,
		currentFeatureId: null,
	},

	reducers: {
		setCurrentFeatureId: (state, { payload }) => {
			state.currentFeatureId = payload;
		},
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
				state.error = false;
			})
			.addCase(getFeatureScoreDetail.fulfilled, (state, action) => {
				state.loading = false;
				// Filter out features where the importance is not zero and parse them to float
				state.questionImportance = action.payload.features
					.filter((feature) => parseFloat(feature.importance) !== 0)
					.map((feature) => parseFloat(feature.importance));

				// if percentages all add up not to 1, then set the question importance as null again,
				// and set error
				const sum = state.questionImportance.reduce((a, b) => a + b, 0);
				if (sum !== 1 && sum !== 0) {
					state.questionImportance = null;
					state.error = 'Question importance does not add up to 1';
				} else {
					state.error = false;
				}
			})

			.addCase(getFeatureScoreDetail.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},

});

export const { setCurrentFeatureId } = featureScoreDetailSlice.actions;

export default featureScoreDetailSlice.reducer;
