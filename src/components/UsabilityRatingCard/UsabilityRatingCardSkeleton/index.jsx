import { Box, Divider, Skeleton } from '@mui/material';

function UsabilityRatingCardSkeleton() {
	return (
		<Box>
			<Box
				sx={
					{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						gap: '10px',
						height: '150px',
					}
				}
			>
				<Skeleton variant="rectangular" width="30%" height="100%" />
				<Skeleton variant="rectangular" width="70%" height="100%" />
			</Box>
			<Divider sx={
				{
					marginTop: '10px',
					marginBottom: '10px',
					border: '2px solid #E0E0E0',
				}
			}
			/>
			<Box sx={
				{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					gap: '10px',
				}
			}
			>
				<Box sx={
					{ width: '50%' }
				}
				>
					<Skeleton variant="text" width="20%" height="30px" />
					<Skeleton variant="text" width="100%" height="20px" />
					<Skeleton variant="text" width="100%" height="20px" />
					<Skeleton variant="text" width="100%" height="20px" />
				</Box>
				<Box sx={
					{ width: '50%' }
				}
				>
					<Skeleton variant="text" width="20%" height="30px" />
					<Skeleton variant="text" width="100%" height="20px" />
				</Box>
			</Box>

		</Box>
	);
}

export default UsabilityRatingCardSkeleton;
