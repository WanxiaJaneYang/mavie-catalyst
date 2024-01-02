import PropTypes from 'prop-types';
import { Snackbar, Alert } from '@mui/material';

function ErrorMessage({
	message, open, handleClose, index,
}) {
	return (
		<Snackbar
			open={open}
			autoHideDuration={2400} // Adjust the duration as needed
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
			style={{ top: 50 + index * 80 }} // Adjust position based on index
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
	index: PropTypes.number.isRequired,
};

export default ErrorMessage;
