/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const featureScoreDetailSlice = createSlice({
	name: 'featureScoreDetail',
	initialState: {
		loading: false,
		error: null,
		data: {
			score: 0.5,
		},
	},

	reducers: {
		getFeatureScoreDetail: (state) => {
			state.loading = true;
		},
		getFeatureScoreDetailSuccess: (state, { payload }) => {
			state.loading = false;
			state.featureScoreDetail = payload;
		},
		getFeatureScoreDetailFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},

});

export const {
	getFeatureScoreDetail,
	getFeatureScoreDetailSuccess,
	getFeatureScoreDetailFailure,
} = featureScoreDetailSlice.actions;

export default featureScoreDetailSlice.reducer;
