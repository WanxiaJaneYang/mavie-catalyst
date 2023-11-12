/* eslint-disable react/function-component-definition */
import {
	Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import theme from '../../theme';
import { ReactComponent as EmailIcon } from '../../images/svg/EnvelopeSimple.svg';
import { ReactComponent as PasswordIcon } from '../../images/svg/LockKey.svg';

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

	return (
		<Box
			sx={{
				my: {
					xs: 8,
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
			<Typography
				component="h1"
				fontSize={29}
				paddingBottom={2}
				alignSelf="flex-start"
				fontFamily="Inter"
				fontWeight={500}
			>
				Welcome to Mavie
			</Typography>
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
					variant="contained"
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
