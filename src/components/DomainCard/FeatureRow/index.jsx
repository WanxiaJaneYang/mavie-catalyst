import {
	Dialog, Grid, Typography, Box, useMediaQuery,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ScoreBar from '../../ScoreBar';
import FeatureCard from '../../FeatureCard';
import wordParser from '../../../utils/wordParser';
import { setCurrentFeatureId } from '../../../features/product/productData/featureScoreDetail';
import theme from '../../../theme';

function FeatureRow({ domainId, featureId, importanceRatingOn }) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const features = useSelector((state) => state.feature.entities);
	const feature = features[featureId];
	const featureRatings = useSelector((state) => state.product.productData.features.data);
	const isLargeScreen = useMediaQuery('(min-width:900px)');
	const featureRating = featureRatings[featureId];
	if (!feature) return null;

	const handleClick = () => {
		console.log(`feature row clicked, set feature id as ${featureId}`);
		dispatch(setCurrentFeatureId(featureId));
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
					// marginBottom: ['5px', '8px', '10px', '10px'], // [mobile, tablet, desktop
					cursor: 'pointer',
					justifyContent: 'space-between',
				}}
				onClick={handleClick}
			>
				<Grid item xs={12} sx={{ marginTop: '10px' }}>
					<Box
						sx={
							{ width: '100%' }
						}
					>
						<Typography
							sx={{
								fontFamily: 'Inter, sans-serif',
								fontWeight: 600,
								// marginLeft: '-10px',
								fontSize: ['12px', '13px', '14px'], // [mobile, tablet, desktop
								textAlign: 'left',
								color: theme.palette.primary.main,
							}}
						>
							{getFeatureName()}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={8} sx={{ marginTop: '-5px' }}>
					<ScoreBar
						score={featureRating || '0'}
						importance={feature.importance || '0'}
						importanceRatingOn={importanceRatingOn}
					/>
				</Grid>
				<Grid item xs={4} sx={{ marginTop: '-5px' }}>

					<Typography
						sx={{
							color: '#000000',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: ['12px', '13px', '14px'], // [mobile, tablet, desktop
							textAlign: 'right',
						}}
					>
						{featureRating ? parseFloat(featureRating).toFixed(1) : 'N/A'}
					</Typography>
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
