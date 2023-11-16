import React from 'react';
import PropTypes from 'prop-types';
import {
	Box, Divider, Typography, Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import ScoreBar from '../../ScoreBar';

function FeatureList({ domainId, importanceRatingOn }) {
	const featureIds = useSelector((state) => state.domain.entities[domainId].features);
	const features = useSelector((state) => state.product.productData.features.entities);

	const getFeatureScoreRow = (featureId) => {
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
	};

	const getFeatureScoreRows = () => featureIds.map((featureId) => getFeatureScoreRow(featureId));

	return (
		<Box>
			<Typography
				sx={{
					color: '#000000',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '16px',
					textAlign: 'left',
					marginBottom: '10px',
				}}
			>
				Features
			</Typography>
			<Box
				overflow="auto"
				sx={{
					height: '150px',
					width: '100%',
					paddingRight: '16px',
					paddingLeft: '16px',
				}}
			>
				{getFeatureScoreRows()}
			</Box>

		</Box>
	);
}

FeatureList.propTypes = {
	domainId: PropTypes.number.isRequired,
	importanceRatingOn: PropTypes.bool.isRequired,
};

export default FeatureList;
