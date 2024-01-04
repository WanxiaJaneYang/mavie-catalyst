import { Button } from '@mui/material';
import propType from 'prop-types';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import theme from '../../theme';

function ScrollToTopButton({ onClick }) {
	return (
		<Button
			variant="outlined"
			sx={{
				mt: 2,
				mb: 2,
				borderRadius: {
					xs: 40,
					sm: 40,
					md: 52,
				},
				height: {
					xs: 26,
					sm: 28,
					md: 30,
				},
				// fixed location at bottom right
				position: 'fixed',
				bottom: 10,
				right: 10,
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.primary.contrastText,
				'&:hover': {
					backgroundColor: theme.palette.primary.light,
				},
				fontFamily: 'Inter, sans-serif',
				fontWeight: 500,
				fontSize: '18px',
				fontStyle: 'normal',
				lineHeight: '30px',
			}}
			startIcon={<KeyboardArrowUpIcon />}
			onClick={onClick}
		>
			Navigate to Top
		</Button>
	);
}

export default ScrollToTopButton;

ScrollToTopButton.propTypes = {
	onClick: propType.func.isRequired,
};
