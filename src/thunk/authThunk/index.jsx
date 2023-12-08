import { createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginApi } from '../../api';

const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
	try {
		console.log('login api called');
		const response = await loginApi(data);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export default login;
