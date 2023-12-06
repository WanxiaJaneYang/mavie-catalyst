/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductRating from '../../../thunk/productMetricThunk';

const productFeaturesSlice = createSlice({
	name: 'productFeatures',
	initialState: {
		loading: false,
		error: null,
		entities: {
			0: {
				name: 'Feature 1',
				importance: 1,
				score: 0.5,
			},
			1: {
				name: 'Feature 2',
				importance: 0.5,
				score: 0.5,
			},
			2: {
				name: 'Feature 3',
				importance: 0.5,
				score: 0.5,
			},
			3: {
				name: 'Feature 4',
				importance: 0.5,
				score: 0.5,
			},
			4: {
				name: 'Feature 5',
				importance: 0.5,
				score: 0.5,
			},
			5: {
				name: 'Feature 6',
				importance: 0.5,
				score: 0.5,
			},
			6: {
				name: 'Feature 7',
				importance: 0.5,
				score: 0.5,
			},
			7: {
				name: 'Feature 8',
				importance: 0.5,
				score: 0.5,
			},
			8: {
				name: 'Feature 9',
				importance: 0.5,
				score: 0.5,
			},
			9: {
				name: 'Feature 10',
				importance: 0.5,
				score: 0.5,
			},
			10: {
				name: 'Feature 11',
				importance: 0.5,
				score: 0.5,
			},
			11: {
				name: 'Feature 12',
				importance: 0.5,
				score: 0.5,
			},
			12: {
				name: 'Feature 13',
				importance: 0.5,
				score: 0.5,
			},
			13: {
				name: 'Feature 14',
				importance: 0.5,
				score: 0.5,
			},
			14: {
				name: 'Feature 15',
				importance: 0.5,
				score: 0.5,
			},
		},
		ids: [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
		],

	},
	reducers: {
		getFeatures: (state) => {
			state.loading = true;
		},
		getFeaturesSuccess: (state, { payload }) => {
			state.loading = false;
			state.productFeatures = payload;
		},
		getFeaturesFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getProductRating.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProductRating.fulfilled, (state, action) => {
				state.loading = false;
				const newData = action.payload.featureRatings.reduce((acc, feature) => {
					acc[feature.id] = feature.rating;
					return acc;
				}, {});
				state.entities = newData;
				state.ids = action.payload.featureRatings.map((feature) => feature.id);
			})
			.addCase(getProductRating.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const {
	getFeatures,
	getFeaturesSuccess,
	getFeaturesFailure,
} = productFeaturesSlice.actions;

export default productFeaturesSlice.reducer;
