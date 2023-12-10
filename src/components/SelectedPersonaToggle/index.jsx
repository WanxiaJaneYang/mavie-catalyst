import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPersona } from '../../features/filters/personaFilterSlice';
import DynamicSvg from '../DynamicSvgIcon';

// eslint-disable-next-line react/prop-types
function SelectedPersonaToggle({ personaId, ...props }) {
	const dispatch = useDispatch();

	const selectedPersonas = useSelector((state) => state.filters.persona);
	const personasEntities = useSelector((state) => state.persona.entities);

	const onClick = (id) => {
		dispatch(setSelectedPersona(
			{
				...selectedPersonas,
				[id]: !selectedPersonas[id],
			},
		));
	};

	const getSVG = () => {
		if (selectedPersonas[personaId] && personasEntities[personaId].roundButtonSelected) {
			console.log('selectedPersonas[personaId]', selectedPersonas[personaId]);
			console.log('personasEntities[personaId].roundButtonSelected', personasEntities[personaId].roundButtonSelected);
			return personasEntities[personaId].roundButtonSelected;
		}
		if (selectedPersonas[personaId]) {
			return '<svg width="79" height="76" viewBox="0 0 79 76" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_448_17754)"><ellipse cx="39.5" cy="38" rx="35.5" ry="34" fill="#F6F8FA"/><text x="39.5" y="40" text-anchor="middle" alignment-baseline="middle" fill="#455468" font-size="12" font-family="sans-serif" font-weight="bold">Persona</text></g><defs><filter id="filter0_d_448_17754" x="0" y="0" width="79" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="2" dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_448_17754"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_448_17754" result="shape"/></filter></defs></svg>';
		}
		if (personasEntities[personaId].roundButtonUnselected) {
			return personasEntities[personaId].roundButtonUnselected;
		}
		return '<svg width="79" height="76" viewBox="0 0 79 76" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5" filter="url(#filter0_d_448_17932)"><ellipse cx="39.5" cy="38" rx="35.5" ry="34" fill="#F6F8FA"/><text x="39.5" y="40" text-anchor="middle" alignment-baseline="middle" fill="#455468" font-size="12" font-family="sans-serif" font-weight="bold">Persona</text></g><defs><filter id="filter0_d_448_17932" x="0" y="0" width="79" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="2" dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_448_17932"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_448_17932" result="shape"/></filter></defs></svg>';
	};

	return (
		<DynamicSvg
			onClick={
				() => onClick(personaId)
			}
			svgData={getSVG()}
			{...props}
		/>

	);
}

export default SelectedPersonaToggle;
