/* eslint-disable no-param-reassign */
import { combineReducers } from '@reduxjs/toolkit';
import ageFilterSlice from './ageFilterSlice';
import personaSlice from './personaFilterSlice';
import domainFilterSlice from './domainFilterSlice';
import productListSlice from './productListSlice';
import genderFilterSlice from './genderFilterSlice';
import toggleFilterSlice from './toggleFilterSlice';
import shareSlice from './shareSlice';

const filters = combineReducers({
	age: ageFilterSlice,
	persona: personaSlice,
	domain: domainFilterSlice,
	product: productListSlice,
	gender: genderFilterSlice,
	toggle: toggleFilterSlice,
	share: shareSlice,
});

export default filters;
