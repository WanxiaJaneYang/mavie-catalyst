import { Button, useMediaQuery } from '@mui/material';
import propType from 'prop-types';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import theme from '../../theme';

function ScrollToTopButton({ onClick }) {
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const title = isMobile ? <KeyboardArrowUpIcon /> : 'Navigate to Top';
	const startIcon = isMobile ? null : <KeyboardArrowUpIcon />;
	const variant = isMobile ? 'text' : 'outlined';

	return (
		<Button
			variant={variant}
			sx={{
				borderRadius: {
					xs: 100,
					sm: 100,
					md: 100,
					lg: 52,
				},
				height: {
					xs: 26,
					sm: 28,
					md: 30,
				},
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
				boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
			}}
			startIcon={startIcon}
			onClick={onClick}

		>
			{title}
		</Button>
	);
}

export default ScrollToTopButton;

ScrollToTopButton.propTypes = {
	onClick: propType.func.isRequired,
};
