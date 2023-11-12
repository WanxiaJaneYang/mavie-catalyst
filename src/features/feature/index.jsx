/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const featureSlice = createSlice({
	name: 'feature',
	initialState: {
		load: false,
		errors: null,
		entities: {
			1: {
				name: 'Readability',
				icon: '',
				importance: 0.2,
				description: 'The text on the product is easy to read and understand',
			},
			2: {
				name: 'Buttons',
				icon: '',
				importance: 0.2,
				description: 'The buttons on the product are easy to press',
			},
			3: {
				name: 'Language',
				icon: '',
				importance: 0.1,
				description: 'The language used on the product is easy to understand',
			},
			4: {
				name: 'Overall Readability',
				icon: '',
				importance: 0.1,
				description: 'The product is easy to read and understand',
			},
			5: {
				name: 'Grip or twist',
				icon: '',
				importance: 0.1,
				description: 'The product is easy to grip or twist',
			},
			6: {
				name: 'Sturdiness',
				icon: '',
				importance: 0.1,
				description: 'The product is sturdy',
			},
			7: {
				name: 'Size and weight',
				icon: '',
				importance: 0.3,
				description: 'The product is easy to hold and carry',
			},
			8: {
				name: 'Product usefulness',
				icon: '',
				importance: 0.7,
				description: 'The product is useful',
			},
			9: {
				name: 'Multimodal feedback',
				icon: '',
				importance: 0.3,
				description: 'The product provides feedback in different ways (e.g. sound, vibration, visual)',
			},
			10: {
				name: 'Ease of instructions',
				icon: '',
				importance: 0.5,
				description: 'The instructions for the product are easy to understand',
			},
			11: {
				name: 'Simple and intuitive design',
				icon: '',
				importance: 0.5,
				description: 'The product is easy to use',
			},
		},
		ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
	},
	reducers: {
		fetchFeatureRequest: (state) => {
			state.loading = true;
		},
		fetchFeatureSuccess: (state, action) => {
			const features = action.payload;
			state.loading = false;
			features.forEach((feature) => {
				state.entities[feature.id] = feature;
				if (!state.ids.includes(feature.id)) {
					state.ids.push(feature.id);
				}
			});
		},
		fetchFeatureFailure: (state, action) => {
			state.loading = false;
			state.errors = action.payload;
		},
	},
});

export const {
	fetchFeatureRequest, fetchFeatureSuccess,
	fetchFeatureFailure,
} = featureSlice.actions;

export default featureSlice.reducer;
