import cookie from 'react-cookies';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginApi } from '../../api';

// eslint-disable-next-line consistent-return
const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
	// Check if user is already logged in
	const isLoggedIn = cookie.load('isLoggedIn');
	if (isLoggedIn) {
		console.log('User is already logged in, loading data from cookies');
		return {
			isLoggedIn: true,
			user_id: cookie.load('user_id'),
			productList: cookie.load('productList'),
		};
	}

	try {
		const response = await loginApi(data);
		// Save user_id and productList in cookies
		cookie.save('isLoggedIn', true, { path: '/' });
		cookie.save('user_id', response.user_id, { path: '/' });
		cookie.save('productList', response.productList, { path: '/' });
		console.log('User logged in successfully and data saved in cookies');
		return {
			isLoggedIn: true,
			user_id: response.user_id,
			productList: response.productList,
		};
	} catch (error) {
		thunkAPI.rejectWithValue(error.message);
	}
});

export default login;
