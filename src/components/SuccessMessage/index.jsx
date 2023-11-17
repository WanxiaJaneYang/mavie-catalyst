import PropTypes from 'prop-types';
import { Snackbar, Alert } from '@mui/material';
import theme from '../../theme';

function SuccessMessage({ message, open, handleClose }) {
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
				severity="success"
				variant="filled"
				sx={{
					backgroundColor: '#3FB95A', // Or theme.palette.success.main if you want to use theme color
					color: theme.palette.success.contrastText,
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

SuccessMessage.propTypes = {
	message: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default SuccessMessage;
