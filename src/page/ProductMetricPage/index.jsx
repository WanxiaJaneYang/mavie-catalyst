import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UsabilityRatingCard from '../../components/UsabilityRatingCard/UsabilityRatingCard';
import SelectedDomainCards from './SelectedDomainCards';
import getProductRating from '../../thunk/productMetricThunk';
import ErrorMessage from '../../components/ErrorMessage';
import { clearProductRatingErrorMessage, clearFeatureScoreDetailErrorMessage } from '../../features/errorMessages/errorMessageSlice';

function ProductMetricPage() {
	const dispatch = useDispatch();
	const { productId } = useParams();
	const [errorMessageOpen, setErrorMessageOpen] = useState(false);
	const errorMessage = useSelector((state) => state.errorMessage.productRating);
	const index = useSelector((state) => state.errorMessage.index.productRating);
	const featureScoreErrorMessages = useSelector((state) => state.errorMessage.featureScoreDetail);
	const featureScoreIndex = useSelector((state) => state.errorMessage.index.featureScoreDetail);
	const [featureScoreErrorMessageOpen, setFeatureScoreErrorMessageOpen] = useState(false);
	useEffect(
		() => {
			if (featureScoreErrorMessages) {
				setFeatureScoreErrorMessageOpen(true);
			}
		},
		[featureScoreErrorMessages],
	);
	useEffect(
		() => {
			// dispatch(getProductFilter(productId));
			// dispatch(getProductInfo(productId));
			dispatch(getProductRating(productId));
		},
		[productId, dispatch],
	);

	useEffect(
		() => {
			if (errorMessage) {
				setErrorMessageOpen(true);
			}
		},
		[errorMessage],
	);

	const handleClose = () => {
		dispatch(clearProductRatingErrorMessage());
		setErrorMessageOpen(false);
	};

	const handleFeatureScoreDetailClose = () => {
		dispatch(clearFeatureScoreDetailErrorMessage());
		setFeatureScoreErrorMessageOpen(false);
	};

	return (
		<Box
			sx={{
				width: '100%',
				height: 'auto',
				justifyContent: 'start',
				gap: '0px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<ErrorMessage
				message={errorMessage}
				open={errorMessageOpen}
				handleClose={handleClose}
				index={index}
			/>
			<ErrorMessage
				message={featureScoreErrorMessages}
				open={featureScoreErrorMessageOpen}
				handleClose={handleFeatureScoreDetailClose}
				index={featureScoreIndex}
			/>
			<UsabilityRatingCard />
			<Typography
				sx={{
					color: '#000000',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '18px',
					textAlign: 'left',

				}}
			>
				Domains
			</Typography>
			<SelectedDomainCards />
		</Box>

	);
}
export default ProductMetricPage;
