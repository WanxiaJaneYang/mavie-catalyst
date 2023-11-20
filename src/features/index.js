import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './product/productSlice';
import productFilterReducer from './filters/filterSlice';
import authReducer from './auth/authSlice';
import domainSlice from './domain';
import personaSlice from './persona';
import brandSlice from './brand/brandSlice';
import cookie from './cookie';
// import personaCardSlice from './product/productPage/personaCardSlice';

const rootReducer = combineReducers({
	cookie,
	filters: productFilterReducer,
	auth: authReducer,
	product: productReducer,
	domain: domainSlice,
	persona: personaSlice,
	brand: brandSlice,
	// personaCard: personaCardSlice,
});

export default rootReducer;
