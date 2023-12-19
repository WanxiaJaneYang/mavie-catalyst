import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import UsabilityRatingCard from '../../components/UsabilityRatingCard/UsabilityRatingCard';
import SelectedDomainCards from './SelectedDomainCards';
import getProductRating from '../../thunk/productMetricThunk';

function ProductMetricPage() {
	const dispatch = useDispatch();
	const { productId } = useParams();

	useEffect(
		() => {
			// dispatch(getProductFilter(productId));
			// dispatch(getProductInfo(productId));
			dispatch(getProductRating(productId));
		},
		[productId, dispatch],
	);

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
