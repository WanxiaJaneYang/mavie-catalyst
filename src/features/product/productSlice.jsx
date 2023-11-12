/* eslint-disable no-param-reassign */
import { combineReducers } from '@reduxjs/toolkit';
import productDataReducer from './productData/productDataSlice';
import generalProduct from './generalProduct';

const product = combineReducers({
	productInfo: generalProduct,
	productData: productDataReducer,
});

export default product;
