import { useMediaQuery, IconButton, Button } from '@mui/material';
import propType from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../theme';

function MenuButton({ onClick }) {
	return (
	// <IconButton
	// 	onClick={onClick}
	// 	aria-label="menu"
	// 	color="primary"
	// 	sx={{
	// 		backgroundColor: theme.palette.primary.main,
	// 		color: theme.palette.primary.contrastText,
	// 		'&:hover': {
	// 			backgroundColor: theme.palette.primary.light,
	// 		},
	// 		borderRadius: '50%',
	// 		boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
	// 	}}
	// >
	// 	<MenuIcon />
	// </IconButton>

		<Button
			variant="outlined"
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
				boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
			}}
			onClick={onClick}
		>
			<MenuIcon />
		</Button>
	);
}

export default MenuButton;

MenuButton.propTypes = {
	onClick: propType.func.isRequired,
};
