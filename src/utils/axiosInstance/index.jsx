import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
	// baseURL: 'https://maviecustomerbackend-698471191.development.catalystserverless.com/server/',
	// baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.response.use(
	(response) => response.data,
	(error) => {
		if (error.response && error.response.status === 404) {
			// if error message contains rating then throw error data not complete
			if (error.response.data.error.includes('rating')) {
				throw new Error('This survey is not completed');
			}
			if (error.response.data.error === 'Product not found') {
				throw new Error('This product information is not available');
			}
			throw new Error('Internet connection is required');
		} else if (error.response) {
			throw new Error(error.response.data.error || 'an error occured, please try again');
		} else if (error.request) {
			throw new Error('Internet connection is required');
		} else {
			throw new Error('an unknown error occured, please contact the support team');
		}
	},
);

export default axiosInstance;
