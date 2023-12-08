/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getProductFilter from '../../thunk/productFilterThunk';

const personaSlice = createSlice({
	name: 'personaFilter',
	initialState: {
		1: true,
		2: true,
		3: true,
		4: true,
		5: true,
		6: true,

	},
	reducers: {
		setSelectedPersona(state, { payload }) {
			Object.keys(payload).forEach((key) => {
				state[key] = payload[key];
			});
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getProductFilter.fulfilled, (state, action) => {
			const featureList = action.payload.features.reduce(
				(acc, feature) => {
					acc[feature.id] = true;
					return acc;
				},
				{},
			);
			state = featureList;
		});
	},
});

export const { setSelectedPersona } = personaSlice.actions;
export default personaSlice.reducer;
