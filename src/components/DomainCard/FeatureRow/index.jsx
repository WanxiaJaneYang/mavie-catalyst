import {
	Dialog, Grid, Typography, Box, useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ScoreBar from '../../ScoreBar';
import FeatureCard from '../../FeatureCard';
import wordParser from '../../../utils/wordParser';

function FeatureRow({ domainId, featureId, importanceRatingOn }) {
	const [open, setOpen] = useState(false);
	const features = useSelector((state) => state.feature.entities);
	const feature = features[featureId];
	const featureRatings = useSelector((state) => state.product.productData.features.data);
	const isLargeScreen = useMediaQuery('(min-width:900px)');
	const featureRating = featureRatings[featureId];
	if (!feature) return null;

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const getFeatureName = () => feature.name || 'No Feature Name';

	return (
		<>
			<Grid
				container
				spacing={1}
				alignItems="center"
				sx={{
					marginBottom: ['5px', '8px', '10px', '10px'], // [mobile, tablet, desktop
					cursor: 'pointer',
					justifyContent: 'space-between',
				}}
				onClick={handleClick}
			>
				<Grid item xs={5} sm={5} lg={4} xl={3}>
					<Box
						sx={
							{ width: '100%' }
						}
					>
						<Typography
							sx={{
								fontFamily: 'Inter, sans-serif',
								fontWeight: 500,
								// marginLeft: '-10px',
								fontSize: ['12px', '13px', '14px'], // [mobile, tablet, desktop
								textAlign: 'left',
							}}
						>
							{getFeatureName()}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={5} sm={5} lg={6} xl={7}>
					<Box
						sx={
							{ width: '100%' }
						}
					>
						<ScoreBar
							score={3.5} // Assuming this is a placeholder value
							importance={feature.importance}
							importanceRatingOn={importanceRatingOn}
						/>
					</Box>
				</Grid>
				<Grid item xs={2} sm={2} lg={2} xl={2}>
					<Box sx={
						{ width: '100%' }
					}
					>
						<Typography
							sx={{
								color: '#000000',
								fontFamily: 'Inter, sans-serif',
								fontWeight: 600,
								fontSize: ['12px', '13px', '14px'], // [mobile, tablet, desktop
								textAlign: 'left',
							}}
						>
							{featureRating || 'N/A'}
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<FeatureCard
				open={open}
				handleCloseClick={handleClose}
				featureId={featureId}
				domainId={domainId}
			/>
		</>
	);
}

export default FeatureRow;

FeatureRow.propTypes = {
	featureId: PropTypes.string.isRequired,
	importanceRatingOn: PropTypes.bool.isRequired,
	domainId: PropTypes.string.isRequired,
};
