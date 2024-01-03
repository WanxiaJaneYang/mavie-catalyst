import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductFilter as getProductFilterAPI } from '../../api';

const getProductFilter = createAsyncThunk('productFilter/getProductFilter', async (data, thunkAPI) => {
	try {
		// console.log('product filter api called');
		const response = await getProductFilterAPI(data);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export default getProductFilter;
