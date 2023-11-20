import { useState } from 'react';
import { Button, Snackbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { allowCookie, disallowCookie } from '../../../features/cookie';
import theme from '../../../theme';

function CookieAcceptSnackbar() {
	const [open, setOpen] = useState(true);
	const dispatch = useDispatch();
	const handleAccept = () => {
		dispatch(allowCookie());
		setOpen(false);
	};

	const handleDecline = () => {
		dispatch(disallowCookie());
		setOpen(false);
	};

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			open={open}
			message="This website uses cookies to enhance the user experience."
			sx={{
				backgroundColor: theme.palette.secondary.main,
				color: theme.palette.primary.contrastText,
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
			// action={(
			// 	<>
			// 		<Button
			// 			sx={{
			// 				mt: 3,
			// 				mb: 2,
			// 				borderRadius: {
			// 					xs: 40,
			// 					sm: 40,
			// 					md: 52,
			// 				},
			// 				height: {
			// 					xs: 36,
			// 					sm: 36,
			// 					md: 48,
			// 				},
			// 				backgroundColor: theme.palette.secondary.main,
			// 				color: theme.palette.primary.contrastText,
			// 				'&:hover': {
			// 					backgroundColor: theme.palette.secondary.light,
			// 				},
			// 			}}
			// 			color="primary"
			// 			type="submit"
			// 		>
			// 			Login
			// 		</Button>
			// 	{/* <Button
			// 		color="primary"
			// 		variant="outlined"
			// 		onClick={handleDecline}
			// 	>
			// 		Decline
			// 	</Button> */}
			// {/* </> */}
			// )}
		/>

	);
}

export default CookieAcceptSnackbar;
