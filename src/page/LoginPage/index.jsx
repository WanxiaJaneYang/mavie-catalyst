import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import theme from '../../theme';
import Login from '../../components/Login';
import logo from '../../images/logo.png';

const defaultTheme = theme;

export default function SignInSide() {
	const navigate = useNavigate();
	const location = useLocation();
	const { userId } = useSelector((state) => state.auth);
	const { currentProduct } = useSelector((state) => state.filters.product);

	useEffect(
		() => {
			// console.log('location: ', location);
			// if (location.state?.from) {
			// 	console.log('location.state.from: ', location.state.from);
			// 	navigate(location.state.from);
			// } else
			if (userId && currentProduct) {
				// console.log('userId and selectedProductId from login page useEffect:
				//  ', userId, currentProduct.id);
				navigate(`/client/${userId}/product/${currentProduct.id}/metrics`);
			} else if (userId) {
				// console.log('userId: ', userId);
				navigate(`/client/${userId}`);
			}
		},
		[userId, location, currentProduct, navigate],
	);

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
						<Login />
					</Box>
				</Grid>
				<Grid item xs={false} sm={4} md={6} sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
					<Box component="img" src={logo} sx={{ maxHeight: '70%', maxWidth: '70%' }} alt="Company Logo" />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
