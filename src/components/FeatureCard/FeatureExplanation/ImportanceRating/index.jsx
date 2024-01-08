import { Box, Typography } from '@mui/material';

function ImportanceRating() {
	return (
		<Box sx={{ paddingTop: '0px', paddingBottom: '8px' }}>
			<Typography sx={{
				fontFamily: 'Inter, sans-serif',
				fontWeight: 600,
				fontSize: '14px',
			}}
			>
				Importance Rating
			</Typography>
			<Typography sx={{
				fontFamily: 'Inter, sans-serif',
				fontWeight: 400,
				fontSize: '12px',
			}}
			>
				The importance rating is a measure of
				how important a feature is to the overall score of the product.
			</Typography>
		</Box>
	);
}

export default ImportanceRating;
