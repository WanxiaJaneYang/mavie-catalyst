import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import theme from '../../../theme';

function ImportanceScore({ score }) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'flex-end',
				justifyContent: 'center',
				gap: '0px',
			}}
		>
			<Typography
				sx={{
					color: theme.palette.warning.main,
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: ['12px', '14px', '16px'], // Breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'
					textAlign: 'left',
				}}
			>
				{parseFloat(score).toFixed(1)}
			</Typography>
			<Typography
				sx={{
					color: theme.palette.warning.main,
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: ['8px', '10px', '16px'], // Breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'
					textAlign: 'left',
					marginLeft: '4px',
				}}
			>
				importance rating
			</Typography>
		</Box>
	);
}
export default ImportanceScore;
ImportanceScore.propTypes = {
	score: PropTypes.string.isRequired,
};
