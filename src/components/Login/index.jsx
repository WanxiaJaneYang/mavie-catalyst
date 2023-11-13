/* eslint-disable react/function-component-definition */
import {
	Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../../theme';
import { ReactComponent as EmailIcon } from '../../images/svg/EnvelopeSimple.svg';
import { ReactComponent as PasswordIcon } from '../../images/svg/LockKey.svg';
import logo from '../../images/svg/Logo.svg';

function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Mavie
			</Link>
			{' '}
			{new Date().getFullYear()}
			.
		</Typography>
	);
}

const Login = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	// use useEffect to check the theme color
	useEffect(() => {
		console.log('theme: ', theme);
		console.log(theme.palette.primary.main);
	}, []);

	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Box
			sx={{
				my: {
					xs: 2,
					sm: 10,
					md: 12,
					lg: 14,
				},
				mx: 'auto',
				ml: {
					xs: 2,
					sm: 4,
					md: 6,
					lg: 8,
				},
				mr: {
					xs: 2,
					sm: 4,
					md: 6,
					lg: 8,
				},
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'left',
			}}
		>
			<Box
				sx={
					{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						mb: 2,
					}
				}
			>
				<Typography
					component="h1"
					fontSize={{
						xs: 25,
						sm: 29,
					}}
					paddingBottom={2}
					alignSelf="flex-start"
					fontFamily="Inter"
					fontWeight={500}
					align="left"
				>
					Welcome to Mavie
				</Typography>
				<img
					src={logo}
					alt="Company Logo"
					style={{
						width: 60,
						height: 60,
						display: matches ? 'none' : 'block',
					}}
				/>

			</Box>

			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="example@email.com"
					autoFocus
					defaultValue="example@email.com"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<EmailIcon />
							</InputAdornment>
						),
					}}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<PasswordIcon />
							</InputAdornment>
						),
					}}
				/>
				{/* <FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/> */}
				<Grid container>
					<Grid
						item
						xs
						textAlign="left"
					>
						<Link
							href="#"
							variant="body2"
							color={theme.palette.text.secondary}
						>
							Forgot password?
						</Link>
					</Grid>
				</Grid>
				<Button
					fullWidth
					variant="outlined"
					sx={{
						mt: 3,
						mb: 2,
						borderRadius: {
							xs: 40,
							sm: 40,
							md: 52,
						},
						height: {
							xs: 36,
							sm: 36,
							md: 48,
						},
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.contrastText,
						'&:hover': {
							backgroundColor: theme.palette.secondary.main,
						},
					}}
					color="primary"
				>
					Login
				</Button>

				<Copyright sx={{ mt: 5 }} />
			</Box>
		</Box>
	);
};

export default Login;
