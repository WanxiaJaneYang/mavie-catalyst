import {
	Divider, Grid, Typography, Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import PercentSplit from './PercentageSplit';
import ImportanceRating from './ImportanceRating';

function FeatureExplanation() {
	const {
		loading,
		error, array,
	} = useSelector((state) => state.featureCard);
	const { currentFeatureId } = useSelector((state) => state.product.productData
		.featureDetail);
	const featureRating = parseFloat(useSelector((state) => state.product.productData
		.features.data[currentFeatureId]));

	const getScoreExplanation = () => {
		if (featureRating === 0) {
			return 'This feature has not yet been rated by users';
		}
		return 'The score is a measure of how well the product performs in this feature.';
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
						<ImportanceRating />
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
								{getScoreExplanation()}
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
					<PercentSplit
						error={error}
						loading={loading}
						array={array}
						featureRating={featureRating}
					/>
				</Grid>
			</Grid>
		</>

	);
}

export default FeatureExplanation;
