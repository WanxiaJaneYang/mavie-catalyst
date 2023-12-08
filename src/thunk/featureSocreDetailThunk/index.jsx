import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductFeature } from '../../api';

const getFeatureScoreDetail = createAsyncThunk('featureScoreDetail/getFeatureScoreDetail', async (data, thunkAPI) => {
	try {
		console.log('feature score detail api called');
		const response = await getProductFeature(data);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export default getFeatureScoreDetail;
