import { Box, Typography } from '@mui/material';
import UsabilityRatingCard from '../../components/UsabilityRatingCard/UsabilityRatingCard';
import SelectedDomainCards from './SelectedDomainCards';

function ProductMetricPage() {
	return (
		<Box
			sx={{
				width: '100%',
				height: 'auto',
				justifyContent: 'start',
				gap: '0px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<UsabilityRatingCard />
			<Typography
				sx={{
					color: '#000000',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '18px',
					textAlign: 'left',

				}}
			>
				Domains
			</Typography>
			<SelectedDomainCards />
		</Box>

	);
}
export default ProductMetricPage;
