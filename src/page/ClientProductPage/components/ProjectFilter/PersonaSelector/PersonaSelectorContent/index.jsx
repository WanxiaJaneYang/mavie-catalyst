import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from '@mui/material';
import { setSelectedPersona } from '../../../../../../features/filters/personaFilterSlice';
import theme from '../../../../../../theme';
import DynamicSvg from '../../../../../../components/DynamicSvgIcon';
import AgeSelector from '../../AgeSelector';
import GenderSelector from '../../GenderSelector';

function PersonaSelectorContent() {
	const dispatch = useDispatch();
	const allPersonaIds = useSelector((state) => state.persona.ids);
	const personaInfo = useSelector((state) => state.persona.entities);
	const selectedPersona = useSelector((state) => state.filters.persona);

	const getPersonaLabel = (personaId) => {
		if (personaInfo[personaId]) {
			return personaInfo[personaId].name;
		}
		return 'default persona';
	};

	const handleSelectCheckbox = (personaId) => {
		dispatch(
			setSelectedPersona(
				{
					...selectedPersona,
					[personaId]: !selectedPersona[personaId],
				},
			),
		);
	};

	const getCheckBoxListComponent = () => (

		<div>
			{allPersonaIds.map((personaId) => (
				<div
					key={`${personaId} checkbox set`}
					style={{
						display: 'flex', alignItems: 'center', gap: '1px',
					}}
				>
					<Checkbox
						checked={selectedPersona[personaId]}
						onChange={() => handleSelectCheckbox(personaId)}
						sx={
							{
								color: theme.palette.grey,
								'&.Mui-checked': {
									color: theme.palette.primary.light,
								},
								verticalAlign: 'middle',
								marginRight: '0px',
							}
						}
					/>
					<DynamicSvg
						style={{
							display: 'flex',
							width: '24px',
							height: '24px',
							borderRadius: '50%',
							verticalAlign: 'middle',
							marginLeft: '0px',
							marginRight: '8px',
						}}
						onClick={() => handleSelectCheckbox(personaId)}
						svgData={personaInfo[personaId].icon}
					/>
					<span
						style={{
							fontFamily: 'Inter',
							fontWeight: '600',
							fontSize: '12px',
							verticalAlign: 'middle',
						}}
					>
						{getPersonaLabel(personaId)}

					</span>
				</div>
			))}
		</div>
	);
	return (
		<>
			{
				allPersonaIds && allPersonaIds.length > 0 && getCheckBoxListComponent()
			}
			{
				allPersonaIds && allPersonaIds.length > 0 && <AgeSelector />
			}
			{
				allPersonaIds && allPersonaIds.length > 0 && <GenderSelector />
			}
		</>
	);
}
export default PersonaSelectorContent;
