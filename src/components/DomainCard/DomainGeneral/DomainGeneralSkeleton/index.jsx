import { Skeleton, Grid, Box } from '@mui/material';

function DomainGeneralSkeleton() {
	return (
		<Grid container spacing={2} alignItems="center" justifyContent="space-between">
			<Grid
				item
				xs={5}
				sm={4}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Skeleton
						variant="circular"
						sx={{
							width: ['30px', '40px', '50px'],
							height: ['30px', '40px', '50px'],
						}}
					/>
					<Skeleton
						variant="text"
						sx={{
							width: '80px',
							height: '30px',
							borderRadius: '28px',
						}}
					/>
				</Box>
			</Grid>
			<Grid item xs={7} sm={8}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '16px',
					}}
				>
					<Skeleton
						variant="rectangular"
						sx={{
							width: '100%',
							height: '100px',
							borderRadius: '28px',
						}}
					/>
				</Box>
			</Grid>
		</Grid>
	);
}

export default DomainGeneralSkeleton;
