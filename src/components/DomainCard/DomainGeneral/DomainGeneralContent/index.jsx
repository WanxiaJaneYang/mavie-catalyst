import {
	Box, Grid, Typography, useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';
import propType from 'prop-types';
import DynamicSvgIcon from '../../../DynamicSvgIcon';
import MavieGauge from '../../../Gauges';

function DomainGeneralContent({ domainId, importanceRatingOn }) {
	const domainInfo = useSelector((state) => state.domain.entities[domainId]);
	const domainRatingData = useSelector((state) => state.product.productData
		.domain.data);
	const domainRating = domainRatingData ? domainRatingData[domainId]?.rating : null;

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
		<Grid container spacing={2} alignItems="center" justifyContent="space-between">
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
						justifyContent: 'center',
					}}
				>
					<DynamicSvgIcon
						svgData={domainInfo.roundIcon}
						sx={{
							width: ['30px', '40px', '50px'],
							height: ['30px', '40px', '50px'],
						}}
					/>
					<Typography
						sx={{
							color: '#000000',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '18px',
							textAlign: 'center',
						}}
					>
						{domainRating}
					</Typography>
				</Box>
			</Grid>
			<Grid item xs={7} sm={8}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '16px',
					}}
				>
					<MavieGauge
						type={importanceRatingOn ? 'importanceRating' : 'default'}
						value={domainRating}
						size={gaugeSize()}
						importance={domainInfo.importance}
					/>
				</Box>
			</Grid>
		</Grid>
	);
}

export default DomainGeneralContent;

DomainGeneralContent.propTypes = {
	domainId: propType.string.isRequired,
	importanceRatingOn: propType.bool.isRequired,
};
