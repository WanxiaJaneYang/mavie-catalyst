import { Skeleton } from '@mui/material';

function PercentSplitSkeleton() {
	return (
		<Skeleton
			variant="rectangular"
			width="100%"
			height={20}
			sx={{ margin: '5px' }}
		/>
	);
}

export default PercentSplitSkeleton;
