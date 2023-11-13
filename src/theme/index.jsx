import { createTheme } from '@mui/material';
import typography from './typography';
import colors from './colors';
import backgroundImg from '../images/background.png';

const theme = createTheme({
	palette: {
		background: {
			default: `url(${backgroundImg})`,
		},
		primary: {
			main: colors.primary,
			dark: colors.purple1,
			light: colors.purple5,
			contrastText: colors.white,
		},

		secondary: {
			main: colors.purple4,
			dark: colors.purple3,
			light: colors.purple5,
		},
		error: {
			main: colors.error,
		},
		warning: {
			main: colors.warning,
		},
		success: {
			main: colors.success,
		},
		text: {
			primary: colors.darkest,
			secondary: colors.dark,
		},
		grey: colors.grey,
	},
	typography,
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					height: '100%',
				},
				body: {
					backgroundImage: `url(${backgroundImg})`,
					backgroundRepeat: 'repeat',
					// backgroundSize: 'stretch',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '100%',
				},

			},
		},
	},

});

export default theme;
