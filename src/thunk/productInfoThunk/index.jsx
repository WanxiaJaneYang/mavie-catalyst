import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductInfo as getProductInfoAPI } from '../../api';

const getProductInfo = createAsyncThunk('productInfo/getProductInfo', async (data, thunkAPI) => {
	try {
		// console.log('product info api called');
		const response = await getProductInfoAPI(data);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export default getProductInfo;
