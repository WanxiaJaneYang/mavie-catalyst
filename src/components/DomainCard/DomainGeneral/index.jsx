import {
	Box, Typography, Grid, useMediaQuery,
} from '@mui/material';
import propTypes from 'prop-types';
import DynamicSvgIcon from '../../DynamicSvgIcon';
import MavieGauge from '../../Gauges';

function DomainGeneral({
	icon, score, importanceRatingOn, importance,
}) {
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
						svgData={icon}
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
						{score}
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
						value={score}
						size={gaugeSize()}
						importance={importance}
					/>
				</Box>
			</Grid>
		</Grid>
	);
}

DomainGeneral.propTypes = {
	icon: propTypes.string.isRequired,
	score: propTypes.number.isRequired,
	importanceRatingOn: propTypes.bool.isRequired,
	importance: propTypes.number.isRequired,
};

export default DomainGeneral;
