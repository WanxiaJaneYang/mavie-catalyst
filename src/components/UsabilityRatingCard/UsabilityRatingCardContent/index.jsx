import {
	Box, Divider, Grid, Skeleton, Typography, useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MavieGauge from '../../Gauges';
import DomainList from '../DomainList';
import ExpertOpinion from '../ExpertOpinion';

function UsabilityRatingCardContent({ productId }) {
	const { score } = useSelector((state) => state.product.productData.overall.data);
	const expertOpinionOn = useSelector((state) => state.filters.toggle.expertOpinionsOn);
	const smallScreen = useMediaQuery('(min-width:600px)');
	const mediumScreen = useMediaQuery('(min-width:900px)');
	const largeScreen = useMediaQuery('(min-width:1200px)');
	const gaugeSize = () => {
		if (largeScreen) return 2.5;
		if (mediumScreen) return 2.2;
		if (smallScreen) return 2;
		return 1.5;
	};

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
				>
					<Typography
						sx={{
							color: '#000000',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 400,
							fontSize: '18px',
							alignItems: 'flex-start',
							marginLeft: '-30px',
							marginBottom: ['10px', '18px', '28px'], // [mobile, tablet, desktop
							justifyContent: 'start',
						}}
					>
						This is the overall rating of the product
					</Typography>
					<Typography
						sx={{
							color: '#000000',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: ['20px', '30px', '38px'],
						}}
					>
						{score}
					</Typography>

				</Grid>

				<Grid item xs={8} display="flex" justifyContent="center" alignItems="center">
					<MavieGauge value={score} size={gaugeSize()} />
				</Grid>
			</Grid>
			<Divider sx={{ marginTop: '10px', marginBottom: '10px', border: '2px solid #E0E0E0' }} />

			<Box sx={{
				width: '100%', display: 'flex', flexDirection: 'row', gap: '10px',
			}}
			>
				<DomainList />
				{expertOpinionOn && <ExpertOpinion />}
			</Box>
		</Box>
	);
}

UsabilityRatingCardContent.propTypes = {
	productId: PropTypes.number.isRequired,
};

export default UsabilityRatingCardContent;
