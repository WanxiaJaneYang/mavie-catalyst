/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const productListSlice = createSlice({
	name: 'productList',
	initialState: {
		currentProduct: {
			productId: 0,
			productName: 'Senior Smart Watch',
		},
		products: [
			{
				productId: 0,
				productName: 'Senior Smart Watch',
			},
			{
				productId: 1,
				productName: 'Senior Smart Watch 2',
			},
		],
		loading: false,
		error: null,
	},
	reducers: {
		setCurrentProduct(state, action) {
			state.currentProduct = action.payload;
		},
		productListRequest(state, action) {
			state.loading = true;
		},
		productListSuccess(state, action) {
			state.loading = false;
			state.products = action.payload;
		},
		productListFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	setCurrentProduct, productListRequest, productListSuccess, productListFail,
} = productListSlice.actions;
export default productListSlice.reducer;
