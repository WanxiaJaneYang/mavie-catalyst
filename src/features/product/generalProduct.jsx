/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductInfo from '../../thunk/productInfoThunk';

const generalProductSlice = createSlice({
	name: 'productDetail',
	initialState: {
		loading: false,
		error: null,
		productDetail: {
			modelName: null,
			productImage: null,
			description: null,
			productCategoryName: null,
			expertOpinion: null,
		},
		showDetail: false,
	},

	reducers: {
		setShowDetail(state, action) {
			state.showDetail = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getProductInfo.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProductInfo.fulfilled, (state, action) => {
				state.loading = false;
				state.productDetail.description = action.payload.description;
				state.productDetail.productCategoryName = action.payload.productCategoryName;
				state.productDetail.expertOpinion = action.payload.expertOpinion;
				state.productDetail.modelName = action.payload.modelName;
				state.productDetail.productImage = action.payload.image;
			})
			.addCase(getProductInfo.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},

});

export const {
	setShowDetail,
} = generalProductSlice.actions;

export default generalProductSlice.reducer;
