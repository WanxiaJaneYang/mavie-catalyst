import { Box, Typography } from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GeneralPersonaCard from './components/GeneralPersonaCard';
import ProductIntroCard from './components/productIntroCard';
import BrandCard from '../../components/BrandCard';
import getProductInfo from '../../thunk/productInfoThunk';
import getProductFilter from '../../thunk/productFilterThunk';

function IndividualProductPage() {
	// if path is /client/:id/product/:id and id changes, then we need to fetch the new product
	const { productId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('dispatching getProductInfo and getProductFilter from individual product page use effect');
		dispatch(getProductInfo(productId));
		dispatch(getProductFilter(productId));
	}, [productId]);

	return (
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
	);
}

export default IndividualProductPage;
