import { Box, Typography } from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearProductInfoErrorMessage } from '../../features/errorMessages/errorMessageSlice';
import GeneralPersonaCard from './components/GeneralPersonaCard';
import ProductIntroCard from './components/productIntroCard';
import BrandCard from '../../components/BrandCard';
import getProductInfo from '../../thunk/productInfoThunk';
import getProductFilter from '../../thunk/productFilterThunk';
import ErrorMessage from '../../components/ErrorMessage';

function IndividualProductPage() {
	// if path is /client/:id/product/:id and id changes, then we need to fetch the new product
	const { productId } = useParams();
	const dispatch = useDispatch();
	const [errorMessageOpen, setErrorMessageOpen] = useState(false);

	const errorMessage = useSelector((state) => state.errorMessage.productInfo);
	const index = useSelector((state) => state.errorMessage.index.productInfo);

	useEffect(() => {
		console.log('dispatching getProductInfo and getProductFilter from individual product page use effect');
		dispatch(getProductInfo(productId));
		dispatch(getProductFilter(productId));
	}, [productId, dispatch]);

	useEffect(
		() => {
			if (errorMessage) {
				setErrorMessageOpen(true);
			}
		},
		[errorMessage],
	);

	const handleClose = () => {
		dispatch(clearProductInfoErrorMessage());
		setErrorMessageOpen(false);
	};

	return (
		<>
			<ErrorMessage
				message={errorMessage}
				open={errorMessageOpen}
				handleClose={handleClose}
				index={index}
			/>
			<Box
				sx={{
					width: '100%',
					height: 'auto',
					justifyContent: 'start',
					paddingRight: '16px',
					paddingLeft: '16px',
					gap: '0px',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<BrandCard />
				<Typography
					sx={
						{
							color: '#000000',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '18px',
							textAlign: 'left',
							marginTop: '16px',
							marginBottom: '16px',
						}
					}
				>
					Product
				</Typography>
				<ProductIntroCard />
				<GeneralPersonaCard />
				<Outlet />
			</Box>
		</>

	);
}

export default IndividualProductPage;
