import { useSelector, useDispatch } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { setSelectedPersona } from '../../../../../features/filters/personaFilterSlice';
import theme from '../../../../../theme';
import GenderSelector from '../GenderSelector';
import AgeSelector from '../AgeSelector';
import DynamicSvg from '../../../../../components/DynamicSvgIcon';

function PersonaSelector() {
	const dispatch = useDispatch();
	const selectedPersona = useSelector((state) => state.filters.persona);
	const allPersonaIds = useSelector((state) => state.persona.ids);
	const personaInfo = useSelector((state) => state.persona.entities);

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
		<Accordion
			elevation={0}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="persona-selector-header"
				sx={
					{
						paddingLeft: '0px',
						paddingRight: '0px',
						paddingBottom: '10px',
					}
				}
			>
				<Typography
					sx={{
						fontFamily: 'Inter, sans-serif',
						fontWeight: '600',
						fontSize: '14px',
						color: theme.palette.dark,
						marginLeft: '-1px',

					}}
				>
					Persona
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					marginTop: '-10px',
					marginLeft: '8px',
					padding: '0px',
				}}
			>
				{getCheckBoxListComponent()}
				<AgeSelector />
				<GenderSelector />
			</AccordionDetails>
		</Accordion>

	);
}

export default PersonaSelector;
