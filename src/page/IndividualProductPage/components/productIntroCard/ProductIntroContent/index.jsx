import {
	Box, Card, CardMedia, Grid, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import MavieRating from '../../../../../components/MavieRating';
import colors from '../../../../../theme/colors';
import productPlaceHolder from '../../../../../images/productPlaceHolder.png';

function ProductIntroContent() {
	const productDetail = useSelector((state) => state.product.productInfo
		.productDetail);
	const productRating = useSelector((state) => state.product.productData.overall.data);

	const productDescription = useSelector((state) => state.product.productInfo
		.productDescription);

	const productImage = useSelector((state) => state.product.productInfo.productDetail
		.productImage);

	const getProductDescription = () => {
		if (productDescription) {
			return productDescription;
		}
		return 'No description Available';
	};

	const getProductImage = () => {
		console.log('productImg:', productImage);
		if (productImage) {
			return productImage;
		}
		return productPlaceHolder;
	};

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'row',
				padding: '16px',
				paddingTop: '0px',
				marginTop: '0px',
				width: '100%',
				border: 'none',
			}}
			elevation={0}
		>
			<Grid
				container
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'start',
					justifyContent: 'space-between',
					marginBottom: '16px',
					gap: '16px',
				}}
			>
				<Grid
					item
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'start',
						justifyContent: 'center',
						marginBottom: '16px',
					}}
				>
					<Typography
						sx={{
							fontSize: '12px',
							fontWeight: 400,
							fontFamily: 'Inter, sans-serif',
							textAlign: 'left',
							marginBottom: '16px',
							color: colors.grey,
						}}
					>
						{productDetail?.productCategoryName}

					</Typography>
					<MavieRating
						value={productRating || 2}
						readOnly
						sx={{
							marginBottom: '16px',
						}}
					/>
					<Typography
						sx={{
							fontSize: '12px',
							fontWeight: 600,
							fontFamily: 'Inter, sans-serif',
							textAlign: 'left',
							marginBottom: '8px',
						}}
					>
						Description
					</Typography>
					<Typography
						sx={{
							fontSize: '12px',
							fontWeight: 400,
							fontFamily: 'Inter, sans-serif',
							textAlign: 'left',
							marginBottom: '16px',
						}}
					>
						{getProductDescription()}
					</Typography>
				</Grid>
				<Grid
					item
				>
					<CardMedia
						component="img"
						image={getProductImage()}
						title={productDetail?.productModalName}
						sx={{
							width: '155px',
							height: '155px',
							borderRadius: '8px',
						}}
					/>

				</Grid>
			</Grid>
		</Card>
	);
}

export default ProductIntroContent;
