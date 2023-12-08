/* eslint-disable react/function-component-definition */
import {
	Box, Checkbox, FormControlLabel, Link, Snackbar, TextField,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useRef, useState, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import theme from '../../theme';
import { ReactComponent as EmailIcon } from '../../images/svg/EnvelopeSimple.svg';
import { ReactComponent as PasswordIcon } from '../../images/svg/LockKey.svg';
import { resetProcess } from '../../features/auth/authSlice';
import login from '../../thunk/authThunk';
import ErrorMessage from '../ErrorMessage';
import Copyright from '../Copyright';
import WelcomeComponent from './WelcomeComponent';
import CookieAcceptSnackbar from './CookieAcceptSnackbar';

const Login = () => {
	const {
		loading, error,
	} = useSelector((state) => state.auth);
	// const { allowCookie } = useSelector((state) => state.cookie);
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		console.log('Base url: ', process.env.REACT_APP_API_BASE_URL);
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		if (!data.get('email')) {
			setEmailError('Email is required');
			return;
		}

		if (!data.get('password')) {
			setPasswordError('Password is required');
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(data.get('email'))) {
			setEmailError('Email is invalid');
			return;
		}
		setEmailError(null);
		setPasswordError(null);

		const loginPostData = {
			email: data.get('email'),
			password: data.get('password').trim(),
			rememberMe: rememberMeRef.current.checked,
		};

		dispatch(login(loginPostData));
	};

	const rememberMeRef = useRef(null);
	const [openError, setOpenError] = useState(false);

	const handleCloseError = () => {
		setOpenError(false);
		dispatch(resetProcess());
	};

	useEffect(
		() => {
			if (error) {
				setOpenError(true);
			}
		},
		[error],
	);

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
			<WelcomeComponent />
			{/* <CookieAcceptSnackbar /> */}
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
					error={!!emailError}
					helperText={emailError}
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
					error={!!passwordError}
					helperText={passwordError}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<PasswordIcon />
							</InputAdornment>
						),
					}}
				/>
				<Box
					sx={
						{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}
					}
				>
					<Link
						href="#"
						variant="body2"
						color={theme.palette.text.secondary}
					>
						Forgot password?
					</Link>
					<FormControlLabel
						control={(
							<Checkbox
								value="remember"
								color="primary"
								inputRef={rememberMeRef}
								// disabled={!allowCookie}
							/>
						)}
						label="Remember me"

					/>
				</Box>
				<LoadingButton
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
						backgroundColor: theme.palette.secondary.main,
						color: theme.palette.primary.contrastText,
						'&:hover': {
							backgroundColor: theme.palette.secondary.light,
						},
					}}
					color="primary"
					type="submit"
					loading={loading}
					// onClick={handleSubmit}
				>
					Login
				</LoadingButton>
				{error && (
					<ErrorMessage message={error} open={openError} handleClose={handleCloseError} />
				)}

				<Copyright sx={{ mt: 5 }} />
			</Box>
		</Box>
	);
};

export default Login;
