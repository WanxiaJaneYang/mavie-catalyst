import PropTypes from 'prop-types';
import { Alert, Popover } from '@mui/material';

function ErrorMessage({ message, open, handleClose }) {
	return (
		<Popover
			open={open}
			onClose={handleClose}
			anchorOrigin={
				{
					vertical: 'top',
					horizontal: 'center',
				}
			}
		>
			<Alert
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
		</Popover>
	);
}

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default ErrorMessage;
