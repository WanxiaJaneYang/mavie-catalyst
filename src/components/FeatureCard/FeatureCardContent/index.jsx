import { Grid, Box, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ImportanceScore from '../ImportanceScore';
import ScoreRating from '../ScoreRating';
import MavieGauge from '../../Gauges';

function FeatureCardContent({ featureId }) {
	const feature = useSelector((state) => state.product.productData.features.entities[featureId]);
	const percentages = useSelector((state) => state.product
		.productData.featureDetail.questionImportance);
	const extraLargeScreen = useMediaQuery('(min-width:1920px)');
	const largeScreen = useMediaQuery('(min-width:1280px)');
	const mediumScreen = useMediaQuery('(min-width:960px)');
	const smallScreen = useMediaQuery('(min-width:600px)');
	const gaugeSize = () => {
		if (extraLargeScreen) {
			return 2;
		}
		if (largeScreen) {
			return 1.8;
		}
		if (mediumScreen) {
			return 1.5;
		}
		if (smallScreen) {
			return 1.5;
		}

		return 1;
	};

	return (
		<Grid
			container
			spacing={2}
			margin={2}
		>
			<Grid
				item
				xs={6}
				sm={4}
				sx={{
					display: 'flex',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'start', // Align the content horizontally
						justifyContent: 'end', // Center the content vertically if needed
					}}
				>
					<ScoreRating score={feature.score} />
					<ImportanceScore score={feature.importance} />
				</Box>
			</Grid>
			<Grid item xs={6} sm={8}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center', // Center the gauge horizontally
						alignItems: 'center', // Center the gauge vertically
						paddingRight: '10px',
					}}
				>
					<MavieGauge
						type="percentage"
						value={feature.score}
						importance={feature.importance}
						percentages={percentages}
						size={gaugeSize()}
					/>
				</Box>
			</Grid>
		</Grid>
	);
}

export default FeatureCardContent;

FeatureCardContent.propTypes = {
	featureId: PropTypes.number.isRequired,
};
