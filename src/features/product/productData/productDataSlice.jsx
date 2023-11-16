/* eslint-disable no-param-reassign */
import { combineReducers } from '@reduxjs/toolkit';

import productDomains from './productDomains';
import productPersonas from './productPersonas';
import productFeatures from './productFeatures';
import featureScoreDetail from './featureScoreDetail';
import overallScoreSlice from './overallScoreSlice';

const productDataReducer = combineReducers({
	domain: productDomains,
	persona: productPersonas,
	features: productFeatures,
	featureDetail: featureScoreDetail,
	overall: overallScoreSlice,
});

export default productDataReducer;
