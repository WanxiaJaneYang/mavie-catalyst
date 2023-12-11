import {
	Box, Divider, Grid, Typography, useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';
import MavieGauge from '../../Gauges';
import DomainList from '../DomainList';
import ExpertOpinion from '../ExpertOpinion';

function UsabilityRatingCardContent() {
	const score = useSelector((state) => state.product.productData.overall.data);
	const expertOpinionOn = useSelector((state) => state.filters.toggle.expertOpinionsOn);
	const isSmallScreen = useMediaQuery('(min-width:600px)');
	const isMediumScreen = useMediaQuery('(min-width:900px)');
	const isLargeScreen = useMediaQuery('(min-width:1200px)');
	const isExtraLargeScreen = useMediaQuery('(min-width:1536px)');
	const gaugeSize = () => {
		if (isExtraLargeScreen) return 1.5;
		if (isLargeScreen) return 1.2;
		if (isMediumScreen) return 1;
		if (isSmallScreen) return 2;
		return 1.2;
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
					xs={5}
					sm={4}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Typography
							sx={{
								color: '#000000',
								fontFamily: 'Inter, sans-serif',
								fontWeight: 400,
								fontSize: ['15px', '18px', '20px'], // [mobile, tablet, desktop
								// marginLeft: '-30px',
								marginBottom: 1,
								textAlign: 'left',
							}}
						>
							Oerall Rating
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
					</Box>
				</Grid>

				<Grid item xs={7} sm={8} display="flex" justifyContent="center" alignItems="center">
					<MavieGauge type="default" value={score} size={gaugeSize()} />
				</Grid>
			</Grid>
			<Divider sx={{ marginTop: '10px', marginBottom: '10px', border: '2px solid #E0E0E0' }} />

			<Grid
				container
				flexDirection="row"
			>
				<Grid
					item
					xs={12}
					md={expertOpinionOn ? 7 : 12}
				>
					<DomainList />
				</Grid>
				<Grid
					item
					display={expertOpinionOn ? 'flex' : 'none'}
					xs={expertOpinionOn ? 0 : 12}
					md={expertOpinionOn ? 5 : 0}
				>
					<ExpertOpinion />
				</Grid>
			</Grid>
		</Box>
	);
}

export default UsabilityRatingCardContent;
