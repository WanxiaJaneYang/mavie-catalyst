import PropTypes from 'prop-types';
import { Snackbar, Alert } from '@mui/material';

function ErrorMessage({ message, open, handleClose }) {
	return (
		<Snackbar
			open={open}
			autoHideDuration={1200} // Adjust the duration as needed
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
		>
			<Alert
				onClose={handleClose}
				severity="error"
				variant="filled"
				sx={{
					fontSize: {
						xs: 12,
						sm: 14,
						md: 16,
					},
					fontWeight: {
						xs: 400,
						sm: 500,
						md: 600,
					},
				}}
			>
				{message}
			</Alert>
		</Snackbar>
	);
}

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default ErrorMessage;
