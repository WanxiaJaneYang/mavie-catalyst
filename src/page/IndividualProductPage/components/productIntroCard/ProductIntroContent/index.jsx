import {
	Box, Card, CardMedia, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import MavieRating from '../../../../../components/MavieRating';
import colors from '../../../../../theme/colors';

function ProductIntroContent() {
	const productDetail = useSelector((state) => state.product.productInfo
		.productDetail);
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
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'start',
					justifyContent: 'center',
					marginBottom: '16px',
					gap: '16px',
				}}
			>
				<Box
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
						value={productDetail?.rating}
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
						{productDetail?.description}
					</Typography>
				</Box>
				<Box
					sx={
						{
							display: 'flex',
							width: '40%',
							height: 155,
						}
					}
				>
					<CardMedia
						component="img"
						image={productDetail?.productImage}
						title={productDetail?.productModalName}
					/>

				</Box>
			</Box>
		</Card>
	);
}

export default ProductIntroContent;
