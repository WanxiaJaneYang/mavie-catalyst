import axios from 'axios';
import { API_BASE_URL } from '../../constants';

const axiosInstance = axios.create({
	baseURL: API_BASE_URL,
});

axiosInstance.interceptors.response.use(
	(response) => response.data,
	(error) => {
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
	},
);

export default axiosInstance;
