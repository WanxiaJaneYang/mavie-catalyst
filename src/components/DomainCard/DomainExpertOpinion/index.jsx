import { Typography, Box } from '@mui/material';
import propType from 'prop-types';
import { useSelector } from 'react-redux';

function DomainExpertOpinion({ domainId }) {
	const expertOpinion = useSelector((state) => state.product.productData.domain
		?.data[domainId]?.expertOpinion);

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
				{expertOpinion || 'No expert opinion available'}
			</Typography>
		</Box>
	);
}

export default DomainExpertOpinion;

DomainExpertOpinion.propTypes = {
	domainId: propType.string.isRequired,
};
