import { Box, Skeleton } from '@mui/material';

function BrandCardSkeleton() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				gap: '10px',
				alignItems: 'center',
			}}
		>
			<Skeleton variant="circular" width={80} height={80} />
			<Skeleton variant="rectangular" width={100} height={20} />
		</Box>
	);
}

export default BrandCardSkeleton;
