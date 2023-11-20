import { Typography, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';

function ProductIntroCardHeader() {
	const { loading } = useSelector((state) => state.product.productInfo);
	const productDetail = useSelector((state) => state.product.productInfo.productDetail);

	if (loading) {
		return <Skeleton variant="text" width={150} height={40} />;
	}

	return (
		<Typography
			sx={{
				color: '#000000',
				fontFamily: 'Inter, sans-serif',
				fontWeight: 600,
				fontSize: '18px',
			}}
		>
			{productDetail?.modelName}
		</Typography>

	);
}

export default ProductIntroCardHeader;
