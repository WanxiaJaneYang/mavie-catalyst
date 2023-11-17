import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function ScoreRating({ score }) {
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
				{score}
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
		</Box>
	);
}

export default ScoreRating;

ScoreRating.propTypes = {
	score: PropTypes.number.isRequired,
};
