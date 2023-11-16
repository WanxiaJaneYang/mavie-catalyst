import { Box, Typography } from '@mui/material';

function ExpertOpinion() {
	return (
		<Box
			width="50%"
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
				Expert opinion is not available for this product
			</Typography>
		</Box>
	);
}

export default ExpertOpinion;
