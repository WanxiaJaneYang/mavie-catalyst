/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const personaSlice = createSlice({
	name: 'persona',
	initialState: {
		load: false,
		errors: null,
		entities: {
			1: {
				name: 'Able & Active',
				icon: '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8622 3.13991C12.8622 4.3982 11.8442 5.41824 10.5884 5.41824C9.33257 5.41824 8.31455 4.3982 8.31455 3.13991C8.31455 1.88162 9.33257 0.861572 10.5884 0.861572C11.8442 0.861572 12.8622 1.88162 12.8622 3.13991ZM15.4893 3.67546L12.5729 6.69237H8.62255L5.68104 3.67213C5.27808 3.2584 4.61608 3.25063 4.20316 3.65439C3.79024 4.05814 3.78249 4.72146 4.18545 5.13519L7.83512 8.88218V18.6142C7.83512 19.1921 8.30339 19.6613 8.88015 19.6613C9.45691 19.6613 9.92518 19.1933 9.92518 18.6142V14.6058H11.2525V18.6142C11.2525 19.1921 11.7208 19.6613 12.2975 19.6613H12.2986C12.8754 19.6613 13.3437 19.1933 13.3437 18.6142V8.90549L16.9904 5.13297C17.3922 4.71813 17.3823 4.05481 16.9671 3.65217C16.5531 3.24952 15.8911 3.25951 15.4893 3.67546Z" fill="#455468"/></svg>',
				roundButtonSelected: '<svg width="79" height="76" viewBox="0 0 79 76" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_448_17754)"><ellipse cx="37.1696" cy="35.7373" rx="35.1696" ry="33.7373" fill="#F6F8FA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M41.3217 22.6029C41.3217 24.8472 39.555 26.6667 37.3756 26.6667C35.1962 26.6667 33.4294 24.8472 33.4294 22.6029C33.4294 20.3585 35.1962 18.5391 37.3756 18.5391C39.555 18.5391 41.3217 20.3585 41.3217 22.6029ZM45.8831 23.5599L40.8261 28.9365H33.9618L28.8613 23.554C28.162 22.816 27.0131 22.8021 26.2965 23.5223C25.5799 24.2425 25.5664 25.4256 26.2657 26.1636L32.5976 32.8449V50.2012C32.5976 51.232 33.4103 52.0689 34.4112 52.0689C35.4122 52.0689 36.2248 51.234 36.2248 50.2012V43.0518H38.5284V50.2012C38.5284 51.232 39.341 52.0689 40.342 52.0689H40.3439C41.3448 52.0689 42.1575 51.234 42.1575 50.2012V32.8907L48.4883 26.1596C49.1857 25.4197 49.1684 24.2365 48.4479 23.5183C47.7294 22.8002 46.5805 22.818 45.8831 23.5599Z" fill="#455468"/></g><defs><filter id="filter0_d_448_17754" x="0" y="0" width="78.3359" height="75.4766" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="2" dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_448_17754"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_448_17754" result="shape"/></filter></defs></svg>',
				roundButtonUnselected: '<svg width="79" height="76" viewBox="0 0 79 76" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5" filter="url(#filter0_d_448_17932)"><ellipse cx="37.1696" cy="35.7373" rx="35.1696" ry="33.7373" fill="#F6F8FA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M41.3217 22.6029C41.3217 24.8472 39.555 26.6667 37.3756 26.6667C35.1962 26.6667 33.4294 24.8472 33.4294 22.6029C33.4294 20.3585 35.1962 18.5391 37.3756 18.5391C39.555 18.5391 41.3217 20.3585 41.3217 22.6029ZM45.8831 23.5599L40.8261 28.9365H33.9618L28.8613 23.554C28.162 22.816 27.0131 22.8021 26.2965 23.5223C25.5799 24.2425 25.5664 25.4256 26.2657 26.1636L32.5976 32.8449V50.2012C32.5976 51.232 33.4103 52.0689 34.4112 52.0689C35.4122 52.0689 36.2248 51.234 36.2248 50.2012V43.0518H38.5284V50.2012C38.5284 51.232 39.341 52.0689 40.342 52.0689H40.3439C41.3448 52.0689 42.1575 51.234 42.1575 50.2012V32.8907L48.4883 26.1596C49.1857 25.4197 49.1684 24.2365 48.4479 23.5183C47.7294 22.8002 46.5805 22.818 45.8831 23.5599Z" fill="#455468"/></g><defs><filter id="filter0_d_448_17932" x="0" y="0" width="78.3359" height="75.4766" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="2" dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_448_17932"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_448_17932" result="shape"/></filter></defs></svg>',
			},
			2: {
				name: 'Vision',
				icon: '',
				roundButtonSelected: '',
				roundButtonUnselected: '',
			},
			3: {
				name: 'Cogntive',
				icon: '',
				roundButtonSelected: '',
				roundButtonUnselected: '',
			},
			4: {
				name: 'Hearing',
				icon: '',
				roundButtonSelected: '',
				roundButtonUnselected: '',
			},
			5: {
				name: 'Other Language',
				icon: '',
				roundButtonSelected: '',
				roundButtonUnselected: '',
			},
			6: {
				id: 6,
				name: 'Mobility',
				icon: '',
				roundButtonSelected: '',
				roundButtonUnselected: '',
			},

		},
		ids: [1, 2, 3, 4, 5, 6],
	},

	reducers: {
		fetchPersonaRequest: (state) => {
			state.loading = true;
		},
		fetchPersonaSuccess: (state, action) => {
			const { domainId, features } = action.payload;
			state.loading = false;
			features.forEach((feature) => {
				state.entities[feature.id] = { ...feature, domainId };
				if (!state.ids.includes(feature.id)) {
					state.ids.push(feature.id);
				}
			});
		},
		fetchPersonaFailure: (state, action) => {
			state.loading = false;
			state.errors = action.payload;
		},
	},
});

export const {
	fetchPersonaRequest,
	fetchPersonaSuccess,
	fetchPersonaFailure,
} = personaSlice.actions;

export default personaSlice.reducer;
