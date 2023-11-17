import { Box, Typography, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import DynamicSvg from '../DynamicSvgIcon';
import BrandCardSkeleton from './BrandCardSkeleton';

function BrandCard() {
	const brandInfo = useSelector((state) => state.brand.data);
	const { loading, error } = useSelector((state) => state.brand);
	const getBrandInfoRendered = () => (
		<>
			<DynamicSvg
				svgData={brandInfo.icon}
				style={{
					width: '80px',
					height: '80px',
					justifyContent: 'center',
				}}
			/>
			<Typography
				sx={{
					color: '#000000',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '18px',
					textAlign: 'start',
				}}
			>
				{brandInfo.name}
			</Typography>
		</>
	);
	return (
		<Box
			sx={{
				display: 'flex',
				height: 'auto',
				marginBottom: '16px',
				backgroundColor: 'transparent',
				justifyContent: 'start',
				alignItems: 'center',
			}}
		>
			{loading && <BrandCardSkeleton />}
			{!loading && error && <Typography>{error}</Typography>}
			{!loading && !error && !brandInfo && <Typography>No brand info</Typography>}
			{!loading && brandInfo && getBrandInfoRendered()}
		</Box>

	);
}

export default BrandCard;
