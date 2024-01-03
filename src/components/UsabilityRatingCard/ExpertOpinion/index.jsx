import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function ExpertOpinion() {
	const expertOpinion = useSelector((state) => state.product.productInfo
		.productDetail.expertOpinion);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Typography
				sx={{
					color: '#000000',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '16px',
					textAlign: 'left',
					marginBottom: '10px',
				}}
			>
				Expert Opinion
			</Typography>
			<Typography
				sx={{
					color: '#000000',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 400,
					fontSize: '14px',
					textAlign: 'left',
				}}
			>
				{expertOpinion || 'No expert opinion available'}
			</Typography>
		</Box>
	);
}

export default ExpertOpinion;
