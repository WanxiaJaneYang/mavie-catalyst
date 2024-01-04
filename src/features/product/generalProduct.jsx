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
				state.productDetail.modelName = null;
				state.productDetail.productImage = null;
				state.productDetail.description = null;
				state.productDetail.productCategoryName = null;
				state.productDetail.expertOpinion = null;
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
				state.productDetail.modelName = null;
				state.productDetail.productImage = null;
				state.productDetail.description = null;
				state.productDetail.productCategoryName = null;
				state.productDetail.expertOpinion = null;
			});
	},

});

export const {
	setShowDetail,
} = generalProductSlice.actions;

export default generalProductSlice.reducer;
