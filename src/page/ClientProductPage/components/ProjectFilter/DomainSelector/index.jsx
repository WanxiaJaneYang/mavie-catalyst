import { useSelector } from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '../../../../../theme';
import DomainSelectorSkeleton from './DomainSelectorSkeleton';
import DomainSelectorContent from './DomainSelectorContent';

function DomainSelector() {
	const { loading, error } = useSelector((state) => state.domain);

	const renderDomainSelectorContent = () => {
		if (error) {
			return null;
		}
		if (loading) {
			return <DomainSelectorSkeleton />;
		}
		return <DomainSelectorContent />;
	};

	return (
		<Accordion
			elevation={0}
			sx={
				{
					marginTop: '0px',
				}
			}
			defaultExpanded
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="Domain-selector-header"
				sx={
					{
						paddingLeft: '0px',
						paddingRight: '0px',
						paddingBottom: '10px',
						marginTop: '0px',
					}
				}
			>
				<Typography
					sx={{
						fontFamily: 'Inter, sans-serif',
						fontWeight: '600',
						fontSize: '14px',
						color: theme.palette.dark,
					}}
				>
					Domains
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					marginTop: '-10px',
					marginLeft: '0px',
					padding: '0px',
				}}
			>
				{renderDomainSelectorContent()}
			</AccordionDetails>
		</Accordion>

	);
}

export default DomainSelector;
