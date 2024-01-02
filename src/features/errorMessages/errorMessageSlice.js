/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductFilter from '../../thunk/productFilterThunk';
import getProductInfo from '../../thunk/productInfoThunk';
import getProductRating from '../../thunk/productMetricThunk';
import getFeatureScoreDetail from '../../thunk/featureSocreDetailThunk';
import login from '../../thunk/authThunk';

const errorMessageSlice = createSlice({
	name: 'errorMessage',
	initialState: {
		messages: {
			productFilter: '',
			productInfo: '',
			productRating: '',
			featureScoreDetail: '',
			login: '',
		},
		index: {
			productFilter: 0,
			productInfo: 1,
			productRating: 2,
			featureScoreDetail: 3,
			login: 4,
		},
	},

	reducers: {
		clearAllErrorMessage: (state) => {
			state.messages.productFilter = '';
			state.messages.productInfo = '';
			state.messages.productRating = '';
			state.messages.featureScoreDetail = '';
			state.messages.login = '';
		},
		clearProductFilterErrorMessage: (state) => {
			state.messages.productFilter = '';
		},
		clearProductInfoErrorMessage: (state) => {
			state.messages.productInfo = '';
		},
		clearProductRatingErrorMessage: (state) => {
			state.messages.productRating = '';
		},
		clearFeatureScoreDetailErrorMessage: (state) => {
			state.messages.featureScoreDetail = '';
		},
		clearLoginErrorMessage: (state) => {
			state.messages.login = '';
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getProductFilter.rejected, (state, action) => {
			state.messages.productFilter = action.error.message;
		});
		builder.addCase(getProductInfo.rejected, (state, action) => {
			state.messages.productInfo = action.error.message;
		});
		builder.addCase(getProductRating.rejected, (state, action) => {
			state.messages.productRating = action.error.message;
		});
		builder.addCase(getFeatureScoreDetail.rejected, (state, action) => {
			state.messages.featureScoreDetail = action.error.message;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.messages.login = action.error.message;
		});
	},

});

export const {
	clearAllErrorMessage,
	clearProductFilterErrorMessage,
	clearProductInfoErrorMessage,
	clearProductRatingErrorMessage,
	clearFeatureScoreDetailErrorMessage,
	clearLoginErrorMessage,
} = errorMessageSlice.actions;

export default errorMessageSlice.reducer;
