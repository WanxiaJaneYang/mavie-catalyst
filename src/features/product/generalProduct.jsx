/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductInfo from '../../thunk/productInfoThunk';

const generalProductSlice = createSlice({
	name: 'productDetail',
	initialState: {
		loading: false,
		error: null,
		productDetail: {
			modelName: 'Spacetalk Life',
			productImage: 'https://images.unsplash.com/photo-1631863552122-3072cf599a46?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			description: 'Spacetalk Life is a mobile phone, GPS tracker and watch all-in-one wearable device. It uses a blend of GPS, Wi-Fi and cellular technologies to allow parents to locate their child and communicate with them via calls and SMS. The device also has a step counter, stopwatch, alarm and calendar. It is waterproof and has a battery life of up to 5 days.',
			productCategoryName: 'Senior Smart Watch Grey',
			expertOpinion: 'The Spacetalk Life is a great option for seniors who want a wearable device that is easy to use and has a long battery life. It is also a good option for seniors who want a device that is waterproof and has a step counter, stopwatch, alarm and calendar.',
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
