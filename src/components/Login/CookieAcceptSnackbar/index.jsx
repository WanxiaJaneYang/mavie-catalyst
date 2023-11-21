import { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
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
		<Alert
			severity="info"
			action={(
				<>
					<Button color="inherit" size="small" onClick={handleAccept}>
						Accept
					</Button>
					<Button color="inherit" size="small" onClick={handleDecline}>
						Decline
					</Button>
				</>
			)}
		>
			This website uses cookies to enhance the user experience.
		</Alert>

	);
}

export default CookieAcceptSnackbar;
