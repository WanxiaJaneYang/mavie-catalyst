import axios from 'axios';

const axiosInstance = axios.create({
	// baseURL: process.env.REACT_APP_API_BASE_URL,
	baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.response.use(
	(response) => response.data,
	(error) => {
		if (error.response && error.response.status === 404) {
			// if error message contains rating then throw error data not complete
			if (error.response.data.error.includes('rating')) {
				throw new Error('This survey is not completed');
			}
			throw new Error('Internet connection is required');
		} else if (error.response) {
			console.log(error);
			throw new Error(error.response.data.error || 'an error occured, please try again');
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
