import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from '../../theme';
import logo from '../../images/logo.png';
import SharedLogin from '../../components/SharedLogin';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = theme;

export default function SignInSide() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid
					item
					xs={12}
					sm={8}
					md={6}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						component={Paper}
						elevation={6}
						sx={{
							width: { xs: '100%', md: '95%', lg: '90%' },
							height: { xs: '100%', md: '95%', lg: '90%' },
							p: 3,
						}}
					>
						<SharedLogin />
					</Box>
				</Grid>
				<Grid item xs={false} sm={4} md={6} sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
					<Box component="img" src={logo} sx={{ maxHeight: '70%', maxWidth: '70%' }} alt="Company Logo" />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
