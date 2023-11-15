import PropTypes from 'prop-types';
import { Alert, Popover } from '@mui/material';
import theme from '../../theme';

function SuccessMessage({ message, open, handleClose }) {
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
				severity="success"
				variant="filled"
				sx={{
					backgroundColor: '#3FB95A',
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
		</Popover>
	);
}

SuccessMessage.propTypes = {
	message: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default SuccessMessage;
