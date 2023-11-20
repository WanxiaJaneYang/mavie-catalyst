import { Typography, Box } from '@mui/material';
import propType from 'prop-types';

function DomainExpertOpinion({ domainId }) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				padding: '0px',
				marginBottom: '10px',
			}}
		>
			<Typography
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '14px',
					textAlign: 'left',
					marginBottom: '10px',
				}}
			>
				Expert Opinions
			</Typography>
			<Typography>
				Expert opinion is not available for this product
			</Typography>
		</Box>
	);
}

export default DomainExpertOpinion;

DomainExpertOpinion.propTypes = {
	domainId: propType.number.isRequired,
};
