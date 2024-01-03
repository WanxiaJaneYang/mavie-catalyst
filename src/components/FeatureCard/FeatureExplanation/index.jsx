import {
	Divider, Grid, Typography, Box, Skeleton,
} from '@mui/material';
import { useSelector } from 'react-redux';

function FeatureExplanation() {
	const { loading, error, array } = useSelector((state) => state.featureCard);

	const getPercentSplitContent = () => {
		const baseContent = 'Percentages split: representation of the percentage of individual rating scores from 1 to 5.';
		let specialContent = 'Out of the total respondents';
		let containsZero = false;
		// if
		if (array && array.length > 0) {
			for (let i = 0; i < array.length; i += 1) {
				if (array[i].importance == 0) {
					containsZero = true;
				} else {
					const tempPercent = parseFloat(array[i].importance) * 100;
					specialContent += `, ${tempPercent}% gave a rating of ${i}`;
				}
			}
		}

		if (containsZero) {
			return `${specialContent}.`;
		}
		return baseContent;
	};

	const getPercentageSplitExplanationRendered = () => {
		if (error) {
			return null;
		}
		if (loading) {
			return (
				<Skeleton
					variant="rectangular"
					width="100%"
					height={20}
					sx={{ margin: '5px' }}
				/>
			);
		}
		if (array && array.length > 0) {
			return (
				<Typography sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 400,
					fontSize: '12px',
				}}
				>
					{getPercentSplitContent()}
				</Typography>
			);
		}
		return null;
	};
	return (
		<>
			<Divider
				sx={
					{
						marginTop: '16px',
						marginBottom: '8px',
						border: '2px solid #E0E0E0',
					}
				}
			/>
			<Grid
				container
				spacing={1}
				margin={1}
				sx={{ paddingRight: '16px', paddingTop: '0px' }}
			>
				<Grid item xs={12} sm={6} sx={{ paddingTop: '0px' }}>
					<Box
						container
						gap={2}
						sx={{
							flexDirection: 'column',
						}}
					>
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
						<Box>
							<Typography sx={{
								fontFamily: 'Inter, sans-serif',
								fontWeight: 600,
								fontSize: '14px',
							}}
							>
								Score
							</Typography>
							<Typography sx={{
								fontFamily: 'Inter, sans-serif',
								fontWeight: 400,
								fontSize: '12px',
							}}
							>
								The score is a measure of how well the product performs in this feature.
							</Typography>

						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					sx={{
						paddingTop: '0px',
						marginTop: '0px',
					}}
				>
					<Box sx={{ flexDirection: 'column' }}>
						<Typography sx={{
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '14px',
						}}
						>
							Percentage Split
						</Typography>
						{getPercentageSplitExplanationRendered()}
					</Box>
				</Grid>
			</Grid>
		</>

	);
}

export default FeatureExplanation;
