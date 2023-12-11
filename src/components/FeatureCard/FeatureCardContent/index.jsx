import {
	Grid, Box, useMediaQuery, Skeleton,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ImportanceScore from '../ImportanceScore';
import ScoreRating from '../ScoreRating';
import MavieGauge from '../../Gauges';
import ErrorMessage from '../../ErrorMessage';

function FeatureCardContent({ featureId }) {
	const feature = useSelector((state) => state.feature.entities[featureId]);
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

	const [errorMessageOpen, setErrorMessageOpen] = useState(false);
	const handleErrorMessageOpen = () => {
		setErrorMessageOpen(true);
	};

	const handleErrorMessageClose = () => {
		setErrorMessageOpen(false);
	};

	useEffect(
		() => {
			if (featureDetailError) {
				handleErrorMessageOpen();
			}
		},
		[featureDetailError],
	);

	const getImportanceRendered = () => {
		if (featureDetailLoading) {
			return (
				<Skeleton
					variant="rectangular"
					width="90%"
					height="120%"
					sx={{
						borderRadius: '10px',
					}}
				/>
			);
		}
		if (featureDetailError) {
			return (
				<ErrorMessage
					open={errorMessageOpen}
					handleClose={handleErrorMessageClose}
					message={featureDetailError}
				/>
			);
		}
		if (!featureDetailLoading && !featureDetailError) {
			return (
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
					<ScoreRating score={featureRating} />
					<ImportanceScore score={feature?.importance} />
				</Box>
			</Grid>
			<Grid item xs={6} sm={8}>
				{getImportanceRendered()}
			</Grid>
		</Grid>
	);
}

export default FeatureCardContent;

FeatureCardContent.propTypes = {
	featureId: PropTypes.number.isRequired,
};
