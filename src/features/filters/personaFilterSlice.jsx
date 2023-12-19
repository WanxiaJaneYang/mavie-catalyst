/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductFilter from '../../thunk/productFilterThunk';

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
	},
});

export const { setSelectedPersona } = personaSlice.actions;
export default personaSlice.reducer;
