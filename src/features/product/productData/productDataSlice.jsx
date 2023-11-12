/* eslint-disable no-param-reassign */
import { combineReducers } from '@reduxjs/toolkit';

import productDomains from './productDomains';
import productPersonas from './productPersonas';
import productFeatures from './productFeatures';
import featureScoreDetail from './featureScoreDetail';

const productDataReducer = combineReducers({
	domain: productDomains,
	persona: productPersonas,
	features: productFeatures,
	featureScoreDetail,
});

export default productDataReducer;
