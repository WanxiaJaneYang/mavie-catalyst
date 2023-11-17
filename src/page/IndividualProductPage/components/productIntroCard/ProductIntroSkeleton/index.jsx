import { Skeleton, Card, Grid } from '@mui/material';

function ProductIntroSkeleton() {
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
			<Grid container sx={{ gap: 2, display: 'flex', flexDirection: 'row' }}>
				<Grid item xs={12} sm={7}>
					<Skeleton variant="rectangular" width="100%" height={200} />
				</Grid>
				<Grid item xs={12} sm={4}>
					<Skeleton variant="rectangular" width="100%" height={200} />
				</Grid>
			</Grid>
		</Card>
	);
}

export default ProductIntroSkeleton;
