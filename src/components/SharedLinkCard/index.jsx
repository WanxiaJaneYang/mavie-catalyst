import { useSelector } from 'react-redux';
import {
	Card, CardHeader, CardContent, Dialog, IconButton, TextField, Button,
} from '@mui/material';
import { useState } from 'react';
import propType from 'prop-types';
import theme from '../../theme';
import CloseIcon from '../icons/CloseIcon';

function SharedLinkCard({ open, handleClose }) {
	const [copySuccess, setCopySuccess] = useState('Copy');

	const copyToClipboard = () => {
		navigator.clipboard.writeText(link).then(() => {
			setCopySuccess('Copied');
		}, () => {
			setCopySuccess('Failed to copy link.');
		});
	};

	const currentProduct = useSelector((state) => state.filters.product.currentProduct);
	const { id } = currentProduct;
	const { name } = currentProduct;
	const baseUrl = process.env.REACT_APP_API_BASE_URL;
	// const baseUrl = 'http://localhost:3000';
	const link = `${baseUrl}#/sharedProduct?id=${id}&name=${name}`;

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			sx={{
				'& .MuiDialog-paper': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',

				},
			}}
		>
			<Card
				sx={{
					width: '100%', // Adjust as needed, or use maxWidth for responsiveness
					maxWidth: '600px',
					overflow: 'visible', // Ensures shadows and such are not clipped
				}}
				elevation={0}
			>
				<CardHeader
					sx={{
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingBottom: '0px',
					}}
					titleTypographyProps={{
						sx: {
							color: '#000000',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '18px',
							textAlign: 'left',
						},
					}}
					title="Share Link"
					action={(
						<IconButton onClick={handleClose}>
							<CloseIcon />
						</IconButton>
					)}
				/>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'row',
						maxHeight: '90vh',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: '10px',
						paddingTop: '0px',
						paddingBottom: '0px',
						width: '100%',
					}}
				>
					<TextField
						fullWidth
						value={link}
						margin="normal"
						InputProps={{
							readOnly: true,
						}}
					/>
					<Button
						onClick={copyToClipboard}
						variant="circle"
						sx={{
							height: '50px',

							backgroundColor: theme.palette.primary.main,
							color: theme.palette.primary.contrastText,
							'&:hover': {
								backgroundColor: theme.palette.primary.light,
							},
						}}
					>
						{copySuccess}
					</Button>
				</CardContent>
			</Card>

		</Dialog>
	);
}

export default SharedLinkCard;

SharedLinkCard.propTypes = {
	open: propType.bool.isRequired,
	handleClose: propType.func.isRequired,
};
