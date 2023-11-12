/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const productPersonaSlice = createSlice({
	name: 'productPersonas',
	initialState: {
		loading: false,
		error: null,
		productPersonas: [1, 2, 3, 4, 5, 6],
	},

	reducers: {
		getPersonas: (state) => {
			state.loading = true;
		},
		getPersonasSuccess: (state, { payload }) => {
			state.loading = false;
			state.productPersonas = payload;
		},
		getPersonasFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},

});

export const {
	getPersonas,
	getPersonasSuccess,
	getPersonasFailure,
} = productPersonaSlice.actions;

export default productPersonaSlice.reducer;
