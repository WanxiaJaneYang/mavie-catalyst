/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import login from '../../thunk/authThunk';

const productListSlice = createSlice({
	name: 'productList',
	initialState: {
		currentProduct: null,
		products: [
		],
		loading: false,
		error: null,
	},
	reducers: {
		setCurrentProduct(state, action) {
			state.currentProduct = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.products = [];
				state.currentProduct = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				// console.log(`login fulfilled${action.payload}`);
				const { productList } = action.payload;
				state.loading = false;
				state.currentProduct = productList[0] || state.currentProduct;
				state.products = productList;
				state.error = null;
			})
			.addCase(login.rejected, (state, action) => {
				// console.log(`login rejected ${action.payload}`);
				state.loading = false;
				state.error = action.payload;
				state.products = [];
				state.currentProduct = null;
			});
	},
});

export const {
	setCurrentProduct,
} = productListSlice.actions;
export default productListSlice.reducer;
