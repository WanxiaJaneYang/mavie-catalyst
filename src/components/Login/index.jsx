/* eslint-disable react/function-component-definition */
import {
	Box, Checkbox, FormControlLabel, Link, Snackbar, TextField,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useRef, useState, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import theme from '../../theme';
import { ReactComponent as EmailIcon } from '../../images/svg/EnvelopeSimple.svg';
import { ReactComponent as PasswordIcon } from '../../images/svg/LockKey.svg';
import { login, resetProcess } from '../../features/auth/authSlice';
import ErrorMessage from '../ErrorMessage';
import Copyright from '../Copyright';
import WelcomeComponent from './WelcomeComponent';
import CookieAcceptSnackbar from './CookieAcceptSnackbar';

const Login = () => {
	const {
		success, loading, error, userId,
	} = useSelector((state) => state.auth);
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const dispatch = useDispatch();
	const location = useLocation();
	const from = location.state?.from || { pathname: `/client/${userId}` };

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		const loginPostData = {
			email: data.get('email'),
			password: data.get('password').trim(),
			rememberMe: rememberMeRef.current.checked,
		};

		dispatch(login(loginPostData));
		navigate(from, { replace: true });
	};

	const rememberMeRef = useRef(null);
	const [openError, setOpenError] = useState(false);

	const navigate = useNavigate();

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

	useEffect(
		() => {
			if (success) {
				// redirect to client/{id}
				navigate(`/client/${userId}`);
				dispatch(resetProcess());
			}
		},
		[success, userId, dispatch, navigate],
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
				>
					Login
				</LoadingButton>
				{error && (
					<ErrorMessage message={error} open={openError} handleClose={handleCloseError} />
				)}

				<Copyright sx={{ mt: 5 }} />
				{/* <CookieAcceptSnackbar /> */}
			</Box>
		</Box>
	);
};

export default Login;
