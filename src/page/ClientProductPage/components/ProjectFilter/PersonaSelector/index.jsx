import { useSelector, useDispatch } from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonaSelectorSkeleton from './PersonaSelectorSkeleton';
import ErrorMessage from '../../../../../components/ErrorMessage';
import PersonaSelectorContent from './PersonaSelectorContent';
import theme from '../../../../../theme';

function PersonaSelector() {
	const { loading, error } = useSelector((state) => state.persona);

	return (
		<Accordion
			elevation={0}
			defaultExpanded
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
				{loading && <PersonaSelectorSkeleton />}
				{error && <ErrorMessage />}
				{!loading && !error && <PersonaSelectorContent />}
			</AccordionDetails>
		</Accordion>

	);
}

export default PersonaSelector;
