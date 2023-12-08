import axiosInstance from '../utils/axiosInstance';

export const login = async (loginInfo) => axiosInstance.post('/login', loginInfo);

export const checkOath = async () => axiosInstance.get('/auth');

export const getProductInfo = async (productId) => axiosInstance.get(`/product/${productId}`);

export const getProductFilter = async (productId) => axiosInstance.get(`/product/${productId}/filter`);

export const getProductRating = async (productId) => axiosInstance.get(`/product/${productId}/rating`);

export const getProductFeature = async (productId, featureId) => axiosInstance.get(`/product/${productId}/feature/${featureId}`);
