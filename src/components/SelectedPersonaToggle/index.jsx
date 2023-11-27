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

	return (
		<DynamicSvg
			onClick={
				() => onClick(personaId)
			}
			svgData={selectedPersonas[personaId] ? personasEntities[personaId].roundButtonSelected
				: personasEntities[personaId].roundButtonUnselected}
			{...props}
		/>

	);
}

export default SelectedPersonaToggle;
