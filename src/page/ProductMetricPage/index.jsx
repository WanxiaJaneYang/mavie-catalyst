import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import DomainCard from '../../components/DomainCard';
import UsabilityRatingCard from '../../components/UsabilityRatingCard/UsabilityRatingCard';

function ProductMetricPage() {
	const domainIds = useSelector((state) => state.domain.ids);
	const selectedDomain = useSelector((state) => state.filters.domain);
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
			<Grid container spacing={2}>
				{domainIds.map((id) => (
					selectedDomain[id]
					&& (
						<Grid item xs={12} sm={12} md={4}>
							<DomainCard
								domainId={id}
								key={`${id}-domain`}
							/>
						</Grid>
					)
				))}
			</Grid>
		</Box>

	);
}
export default ProductMetricPage;
