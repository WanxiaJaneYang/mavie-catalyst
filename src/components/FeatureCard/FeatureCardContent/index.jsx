import {
	Grid, Box, useMediaQuery, Skeleton, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import ImportanceScore from '../ImportanceScore';
import ScoreRating from '../ScoreRating';
import MavieGauge from '../../Gauges';
import getFeatureScoreDetail from '../../../thunk/featureSocreDetailThunk';
import FeatureExplanation from '../FeatureExplanation';

function FeatureCardContent({ featureId }) {
	const dispatch = useDispatch();
	const feature = useSelector((state) => state.feature.entities[featureId]);
	const explanationOn = useSelector((state) => state.featureCard.explanationOn);
	const currentProductId = useSelector((state) => state.filters.product.currentProduct.id);
	const currentFeatureId = useSelector((state) => state.product.productData
		.featureDetail.currentFeatureId);
	const featureRating = useSelector((state) => state.product.productData
		.features.data[featureId]);
	const featureDetailLoading = useSelector((state) => state.product.productData
		.featureDetail.loading);
	const featureDetailError = useSelector((state) => state.product.productData
		.featureDetail.error);
	const percentages = useSelector((state) => state.product
		.productData.featureDetail.questionImportance);

	const extraLargeScreen = useMediaQuery('(min-width:1920px)');
	const largeScreen = useMediaQuery('(min-width:1280px)');
	const mediumScreen = useMediaQuery('(min-width:960px)');
	const smallScreen = useMediaQuery('(min-width:600px)');

	const gaugeSize = () => {
		if (extraLargeScreen) {
			return 1.9;
		}
		if (largeScreen) {
			return 1.8;
		}
		if (mediumScreen) {
			return 1.8;
		}
		if (smallScreen) {
			return 1.5;
		}

		return 1;
	};

	useEffect(
		() => {
			// console.log('feature score detail api called, feature id: ', currentFeatureId);
			// console.log('feature score detail api called, product id: ', currentProductId);
			if (currentProductId && currentFeatureId) {
				// console.log('feature id: ', currentFeatureId, 'product id: ', currentProductId);
				dispatch(getFeatureScoreDetail({
					productId: currentProductId,
					featureId: currentFeatureId,
				}));
			}
		},
		[currentFeatureId, dispatch, currentProductId],
	);

	const getImportanceRendered = () => {
		if (featureDetailLoading) {
			// console.log('feature score detail api loading, rendering skeleton');
			return (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center', // Center the gauge horizontally
						alignItems: 'center', // Center the gauge vertically
						paddingRight: '10px',
					}}
				>
					<Skeleton
						variant="rectangular"
						width={gaugeSize() * 150}
						height={gaugeSize() * 100}
						sx={{
							borderRadius: '10px',
						}}
					/>
				</Box>
			);
		}
		if (featureDetailError) {
			return null;
		}
		if (!featureDetailLoading && !featureDetailError) {
			// console.log('feature score detail api success, feature id: ', currentFeatureId);
			return (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center', // Center the gauge horizontally
						alignItems: 'center', // Center the gauge vertically
						paddingRight: '5px', // [mobile, tablet, desktop
						marginRight: '5px', // [mobile, tablet, desktop
						marginLeft: '-5px', // [mobile, tablet, desktop
						paddingLeft: '-5px', // [mobile, tablet, desktop
						marginBottom: ['0px', '0px', '5px'], // [mobile, tablet, desktop
						paddingBottom: ['0px', '0px', '5px'], // [mobile, tablet, desktop
						marginTop: ['0px', '0px', '-5px'], // [mobile, tablet, desktop
						paddingTop: ['0px', '0px', '-5px'], // [mobile, tablet, desktop
					}}
				>
					<MavieGauge
						type="percentage"
						value={featureRating}
						importance={feature?.importance}
						percentages={percentages || [0.2, 0.2, 0.2, 0.2, 0.2]}
						size={gaugeSize()}
					/>
				</Box>
			);
		}
		return null;
	};

	const getFeatureDescription = () => {
		// if too long, truncate
		if (feature.description.length > 100) {
			return `${feature.description.substring(0, 100)}...`;
		}
		return feature.description || 'No Feature Description';
	};
	return (
		<>
			<Grid
				container
				spacing={1}
				margin={1}
				alignItems="center"
			>
				<Grid
					item
					xs={5}
					sm={4}
					md={6}
					sx={{
						display: 'flex',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',

						}}
					>
						<Typography
							sx={{
								fontFamily: 'Inter, sans-serif',
								fontWeight: 500,
								fontSize: ['12px', '13px', '14px'], // [mobile, tablet, desktop
								textAlign: 'left',
								color: '#455468',
								marginTop: '-20px',
								marginBottom: '10px',
							}}
						>
							{getFeatureDescription()}
						</Typography>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'start', // Align the content horizontally
								justifyContent: 'end', // Center the content vertically if needed
							}}
						>
							<ScoreRating score={featureRating} />
							<ImportanceScore score={feature?.importance} />
						</Box>
					</Box>
				</Grid>
				<Grid item xs={7} sm={8} md={6}>
					{getImportanceRendered()}
				</Grid>
			</Grid>
			{explanationOn && <FeatureExplanation />}
		</>
	);
}

export default FeatureCardContent;

FeatureCardContent.propTypes = {
	featureId: PropTypes.string.isRequired,
};
