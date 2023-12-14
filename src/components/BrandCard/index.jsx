import { Box, Typography, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import DynamicSvg from '../DynamicSvgIcon';
import BrandCardSkeleton from './BrandCardSkeleton';

function BrandCard() {
	const brandInfo = useSelector((state) => state.brand.data);
	const { loading, error } = useSelector((state) => state.brand);

	const getBrandIcon = () => {
		if (brandInfo && brandInfo.icon) {
			return brandInfo.icon;
		}

		return '<svg width="80" height="80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><style>.text { font: bold 22px sans-serif; fill: #7B4FAB; }</style><circle cx="100" cy="100" r="60" stroke="#7B4FAB" stroke-width="3" fill="none" /><text x="100" y="105" text-anchor="middle" class="text">No SVG</text></svg>';
	};

	const getBrandInfoRendered = () => (
		<>
			<DynamicSvg
				svgData={getBrandIcon()}
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
			{!loading && !error && !brandInfo && <Typography>No brand info</Typography>}
			{!loading && brandInfo && getBrandInfoRendered()}
		</Box>

	);
}

export default BrandCard;
