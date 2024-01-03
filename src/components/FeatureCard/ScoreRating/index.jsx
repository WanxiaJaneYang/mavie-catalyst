import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import QuestionIcon from '../QuestionIcon';
import { setExplanationOn } from '../../../features/featureCard/featureCardSlice';

function ScoreRating({ score }) {
	const dispatch = useDispatch();
	const explanationOn = useSelector((state) => state.featureCard.explanationOn);

	const handleClick = () => {
		dispatch(setExplanationOn(!explanationOn));
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '0px',
			}}
		>
			<Typography
				sx={{
					color: '#000000',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: ['18px', '20px', '24px'], // Breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'
					textAlign: 'left',
				}}
			>
				{parseFloat(score).toFixed(1)}
			</Typography>
			<Typography
				sx={{
					color: '#ADBBCC',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: ['18px', '20px', '24px'], // Breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'
					textAlign: 'left',
					marginLeft: '4px',
				}}
			>
				/5
			</Typography>
			<QuestionIcon onClick={handleClick} />
		</Box>
	);
}

export default ScoreRating;

ScoreRating.propTypes = {
	score: PropTypes.string.isRequired,
};
