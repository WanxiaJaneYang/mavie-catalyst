import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ScoreBar from '../../ScoreBar';

function FeatureRow({ featureId, importanceRatingOn }) {
	const features = useSelector((state) => state.product.productData.features.entities);
	const feature = features[featureId];
	if (!feature) return null;

	return (
		<Grid container spacing={2} alignItems="center" sx={{ marginBottom: '10px' }}>
			<Grid item sm={4} lg={3} xl={2}>
				<Typography
					sx={{
						fontFamily: 'Inter, sans-serif',
						fontWeight: 500,
						fontSize: '12px',
						textAlign: 'left',
					}}
				>
					{feature.name}
				</Typography>
			</Grid>
			<Grid item xs={6} sm={6} lg={8} xl={9}>
				<ScoreBar
					score={3.5} // Assuming this is a placeholder value
					importance={feature.importance}
					importanceRatingOn={importanceRatingOn}
				/>
			</Grid>
			<Grid item xs={2} sm={2} lg={1}>
				<Typography
					sx={{
						color: '#000000',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '14px',
						textAlign: 'left',
					}}
				>
					{feature.score}
				</Typography>
			</Grid>
		</Grid>
	);
}

export default FeatureRow;

FeatureRow.propTypes = {
	featureId: PropTypes.string.isRequired,
	importanceRatingOn: PropTypes.bool.isRequired,
};
