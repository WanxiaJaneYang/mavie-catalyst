// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
// import { LoadingButton } from '@mui/lab';
// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import theme from '../../../../theme';
// import { share, resetShare } from '../../../../features/filters/shareSlice';
// import SuccessMessage from '../../../../components/SuccessMessage';
// import ErrorMessage from '../../../../components/ErrorMessage';

// function ShareButton() {
// 	const dispatch = useDispatch();

// 	const {
// 		loading, success, error,
// 	} = useSelector((state) => state.filters.share);

// 	const clickShare = () => {
// 		dispatch(share());
// 	};

// 	const [openSuccess, setOpenSuccess] = useState(false);
// 	const [openError, setOpenError] = useState(false);

// 	const handleCloseSuccess = () => {
// 		setOpenSuccess(false);
// 		dispatch(resetShare());
// 	};

// 	const handleCloseError = () => {
// 		setOpenError(false);
// 		dispatch(resetShare());
// 	};

// 	useEffect(
// 		() => {
// 			if (success) {
// 				setOpenSuccess(true);
// 			}
// 		},
// 		[success],
// 	);

// 	useEffect(
// 		() => {
// 			if (error) {
// 				setOpenError(true);
// 			}
// 		},
// 		[error],
// 	);

// 	return (
// 		<>
// 			<LoadingButton
// 				fullWidth
// 				variant="outlined"
// 				sx={{
// 					mt: 2,
// 					mb: 2,
// 					borderRadius: {
// 						xs: 40,
// 						sm: 40,
// 						md: 52,
// 					},
// 					height: {
// 						xs: 26,
// 						sm: 28,
// 						md: 30,
// 					},
// 					backgroundColor: theme.palette.primary.main,
// 					color: theme.palette.primary.contrastText,
// 					'&:hover': {
// 						backgroundColor: theme.palette.primary.light,
// 					},
// 				}}
// 				startIcon={<ShareOutlinedIcon />}
// 				loading={loading}
// 				onClick={clickShare}
// 			>
// 				Share
// 			</LoadingButton>
// 			{openSuccess
// && <SuccessMessage open={openSuccess}
// message="an email containing sharing link is sent to your email"
// handleClose={handleCloseSuccess} />}
// 			{openError && (
// 				<ErrorMessage
// 					open={openError}
// 					message={error}
// 					handleClose={handleCloseError}
// 				/>
// 			)}
// 		</>
// 	);
// }

// export default ShareButton;

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { LoadingButton } from '@mui/lab';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import theme from '../../../../theme';
import { share, resetShare } from '../../../../features/filters/shareSlice';
import SuccessMessage from '../../../../components/SuccessMessage';
import ErrorMessage from '../../../../components/ErrorMessage';
import SharedLinkCard from '../../../../components/SharedLinkCard';

function ShareButton() {
	const [open, setOpen] = useState(false);

	const clickShare = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<LoadingButton
				fullWidth
				variant="outlined"
				sx={{
					mt: 2,
					mb: 2,
					borderRadius: {
						xs: 40,
						sm: 40,
						md: 52,
					},
					height: {
						xs: 26,
						sm: 28,
						md: 30,
					},
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.primary.contrastText,
					'&:hover': {
						backgroundColor: theme.palette.primary.light,
					},
				}}
				startIcon={<ShareOutlinedIcon />}
				loading={false}
				onClick={clickShare}
			>
				Share
			</LoadingButton>
			<SharedLinkCard open={open} handleClose={handleClose} />
		</>
	);
}

export default ShareButton;
