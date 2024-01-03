import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductFeature } from '../../api';

const getFeatureScoreDetail = createAsyncThunk('featureScoreDetail/getFeatureScoreDetail', async ({ productId, featureId }, thunkAPI) => {
	try {
		// console.log('feature score detail api called', productId, featureId);
		const response = await getProductFeature(productId, featureId);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export default getFeatureScoreDetail;
