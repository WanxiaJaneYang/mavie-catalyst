import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductRating as getProductRatingAPI } from '../../api';

const getProductRating = createAsyncThunk('productRating/getProductRating', async (data, thunkAPI) => {
	try {
		const response = await getProductRatingAPI(data);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export default getProductRating;
