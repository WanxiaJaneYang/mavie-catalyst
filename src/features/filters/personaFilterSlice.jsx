/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductFilter from '../../thunk/productFilterThunk';
import { RESET_STATE } from '../../constants';

const personaSlice = createSlice({
	name: 'personaFilter',
	initialState: { },
	reducers: {
		setSelectedPersona(state, { payload }) {
			Object.keys(payload).forEach((key) => {
				state[key] = payload[key];
			});
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getProductFilter.pending, (state) => {
			// reset to all true, clear all filters, reset to initial state
			state = undefined;
		});
		builder.addCase(getProductFilter.fulfilled, (state, action) => {
			const personaList = action.payload.personas.reduce(
				(acc, persona) => {
					acc[persona.id] = true;
					return acc;
				},
				{},
			);

			// Correct way to update the state
			Object.keys(personaList).forEach((key) => {
				state[key] = personaList[key];
			});
		});

		builder.addCase(RESET_STATE, (state) => {
			// reset to all true
			Object.keys(state).forEach((key) => {
				state[key] = true;
			});
		});
	},
});

export const { setSelectedPersona } = personaSlice.actions;
export default personaSlice.reducer;
