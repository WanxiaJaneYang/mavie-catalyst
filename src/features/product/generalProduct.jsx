/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const generalProductSlice = createSlice({
	name: 'productDetail',
	initialState: {
		loading: false,
		error: null,
		productDetail: {
			productId: 1,
			brandId: 1,
			modelName: 'Spacetalk Life',
			productImage: 'https://images.unsplash.com/photo-1631863552122-3072cf599a46?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			description: 'Spacetalk Life is a mobile phone, GPS tracker and watch all-in-one wearable device. It uses a blend of GPS, Wi-Fi and cellular technologies to allow parents to locate their child and communicate with them via calls and SMS. The device also has a step counter, stopwatch, alarm and calendar. It is waterproof and has a battery life of up to 5 days.',
			productCategoryName: 'Senior Smart Watch Grey',
			expertOpinion: 'The Spacetalk Life is a great option for seniors who want a wearable device that is easy to use and has a long battery life. It is also a good option for seniors who want a device that is waterproof and has a step counter, stopwatch, alarm and calendar.',
		},
		showDetail: false,
	},

	reducers: {
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setError(state, action) {
			state.error = action.payload;
		},
		setProductDetail(state, action) {
			state.productDetail = action.payload;
		},
		setShowDetail(state, action) {
			state.showDetail = action.payload;
		},
	},

});

export const {
	setLoading, setError,
	setProductDetail, setShowDetail,
} = generalProductSlice.actions;

export default generalProductSlice.reducer;
