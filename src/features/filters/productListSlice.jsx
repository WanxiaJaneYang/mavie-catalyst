/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import login from '../../thunk/authThunk';

const productListSlice = createSlice({
	name: 'productList',
	initialState: {
		currentProduct: null,
		products: [
			{
				id: 0,
				name: 'Senior Smart Watch',
			},
			{
				id: 1,
				name: 'Senior Smart Watch 2',
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

	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				const { productList } = action.payload;
				state.loading = false;
				[state.currentProduct] = productList;
				state.products = productList;
				state.error = null;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const {
	setCurrentProduct, productListRequest, productListSuccess, productListFail,
} = productListSlice.actions;
export default productListSlice.reducer;
