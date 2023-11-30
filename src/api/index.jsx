import axiosInstance from '../utils/axiosInstance';

export const login = async (loginInfo) => axiosInstance.post('/login', loginInfo);

export const checkOath = async () => axiosInstance.get('/auth');

export const getProductInfo = async (productId) => axiosInstance.get(`/products/${productId}`);

export const getProductFilter = async (productId) => axiosInstance.get(`/products/${productId}/filter`);

export const getProductRating = async (productId) => axiosInstance.get(`/products/${productId}/rating`);

export const getProductFeature = async (productId, featureId) => axiosInstance.get(`/products/${productId}/features/${featureId}`);
