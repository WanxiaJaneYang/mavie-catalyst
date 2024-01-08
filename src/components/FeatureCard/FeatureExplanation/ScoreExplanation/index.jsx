import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function ScoreExplanation({ featureRating }) {
	const getScoreExplanationContent = () => {
		if (featureRating === 0) {
			return 'This feature has not yet been rated by users';
		}
		return 'The score is a measure of how well the product performs in this feature.';
	};
	return (
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
				{getScoreExplanationContent()}
			</Typography>

		</Box>
	);
}

export default ScoreExplanation;

ScoreExplanation.propTypes = {
	featureRating: PropTypes.number.isRequired,
};
