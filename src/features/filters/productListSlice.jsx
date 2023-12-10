/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import login from '../../thunk/authThunk';

const productListSlice = createSlice({
	name: 'productList',
	initialState: {
		currentProduct: {
			id: 0,
			name: 'Senior Smart Watch',
		},
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
				state.currentProduct = productList[0] || state.currentProduct;
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
	setCurrentProduct,
} = productListSlice.actions;
export default productListSlice.reducer;
