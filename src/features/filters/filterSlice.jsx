/* eslint-disable no-param-reassign */
import { combineReducers } from '@reduxjs/toolkit';
import ageFilterSlice from './ageFilterSlice';
import personaSlice from './personaFilterSlice';
import domainFilterSlice from './domainFilterSlice';
import productListSlice from './productListSlice';
import genderFilterSlice from './genderFilterSlice';
import toggleFilterSlice from './toggleFilterSlice';
import { RESET_STATE } from '../../constants';

const filters = combineReducers({
	age: ageFilterSlice,
	persona: personaSlice,
	domain: domainFilterSlice,
	product: productListSlice,
	gender: genderFilterSlice,
	toggle: toggleFilterSlice,
});

const filtersReducer = (state, action) => {
	if (action.type === RESET_STATE) {
		state = undefined;
	}

	return filters(state, action);
};
export default filtersReducer;
