import {
	Box, Divider, Grid, Skeleton, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MavieGauge from '../../Gauges';
import DomainList from '../DomainList';
import ExpertOpinion from '../ExpertOpinion';

function UsabilityRatingCardContent({ productId }) {
	const { score } = useSelector((state) => state.product.productData.overall.data);

	return (
		<Box>
			<Grid
				container
				spacing={2}
				alignItems="center"
				justifyContent="center"
				sx={
					{
						height: '200px',
					}
				}
			>
				<Grid
					item
					xs={2}
					display="flex"
					flexDirection="column"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography
						sx={{
							color: '#000000',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 400,
							fontSize: '18px',
							justifyContent: 'center',
						}}
					>
						This is the overall rating of the product
					</Typography>
					<Typography
						sx={{
							color: '#000000',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '36px',
						}}
					>
						{score}
					</Typography>

				</Grid>

				<Grid item xs={8} display="flex" justifyContent="center" alignItems="center">
					<MavieGauge value={score} size={2.5} />
				</Grid>
			</Grid>
			<Divider sx={{ marginTop: '10px', marginBottom: '10px', border: '2px solid #E0E0E0' }} />

			<Box sx={{
				width: '100%', display: 'flex', flexDirection: 'row', gap: '10px',
			}}
			>
				<DomainList />
				<ExpertOpinion />
			</Box>
		</Box>
	);
}

UsabilityRatingCardContent.propTypes = {
	productId: PropTypes.number.isRequired,
};

export default UsabilityRatingCardContent;
