import {
	Typography, Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import getPercentSplitContent from './getPercenSplitContent';
import PercentSplitSkeleton from './PercentSplitSkeleton';

function PercentSplit({
	error, loading, array, featureRating,
}) {
	const getPercentageSplitExplanationRendered = () => {
		if (error) {
			return 'An error occured while loading the data. Please try again later.';
		}
		if (loading) {
			return (
				<PercentSplitSkeleton />
			);
		}
		if (featureRating === 0) {
			return 'No percentage split available for this feature';
		}
		if (array && array.length > 0) {
			return (
				<Typography sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 400,
					fontSize: '12px',
				}}
				>
					{getPercentSplitContent(array)}
				</Typography>
			);
		}
		return null;
	};

	return (
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
	);
}

export default PercentSplit;

PercentSplit.propTypes = {
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
	loading: PropTypes.bool.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	array: PropTypes.arrayOf(PropTypes.object).isRequired,
	featureRating: PropTypes.number.isRequired,
};
