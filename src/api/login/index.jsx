import axios from 'axios';
import { API_BASE_URL } from '../../constants';

const login = async (data) => {
	const URL = `${API_BASE_URL}/login`;
	const headers = {
		'Content-Type': 'application/json',
	};
	try {
		const response = await axios.post(URL, data, { headers });
		return response.data;
	} catch (error) {
		if (error.response) {
			console.log(error);
			throw new Error(error.response.data.message || 'an error occured, please try again');
		} else if (error.request) {
			console.log(error);
			throw new Error('Internet connection is required');
		} else {
			console.log(error);
			throw new Error('an unknown error occured, please contact the support team');
		}
	}
};

export default login;
