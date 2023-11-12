import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import DynamicSvg from '../DynamicSvgIcon';

function BrandCard() {
	const brandInfo = useSelector((state) => state.brand.data);
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
		</Box>

	);
}

export default BrandCard;
