import { useSelector, useDispatch } from 'react-redux';
import {
	Accordion, Typography, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import UsabilityRatingCardSkeleton from './UsabilityRatingCardSkeleton';
import UsabilityRatingCardContent from './UsabilityRatingCardContent';
import ErrorMessage from '../ErrorMessage';

function UsabilityRatingCard() {
	const [errorMessageOpen, setErrorMessageOpen] = useState(false);
	const { loading, error, data } = useSelector((state) => state.product.productData.overall);

	const handleErrorMessageOpen = () => {
		setErrorMessageOpen(true);
	};

	const handleErrorMessageClose = () => {
		setErrorMessageOpen(false);
	};
	useEffect(
		() => {
			if (error) {
				handleErrorMessageOpen();
			}
		},
		[error],
	);

	const getCardContentRendered = () => {
		if (loading) {
			return (
				<UsabilityRatingCardSkeleton />
			);
		}
		if (error) {
			return (
				<ErrorMessage
					open={errorMessageOpen}
					handleClose={handleErrorMessageClose}
					errorMessage={error}
				/>
			);
		}
		if (data) {
			return (
				<UsabilityRatingCardContent data={data} />
			);
		}
		return null;
	};

	return (
		<Accordion
			sx={
				{
					marginBottom: '10px',
					padding: '10px',
				}
			}
			defaultExpanded
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="usability-header"
				id="usability-header"
			>
				<Typography
					sx={{
						color: '#000000',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '18px',
						textAlign: 'start',
					}}
				>
					Usability Rating
				</Typography>
			</AccordionSummary>
			<AccordionDetails sx={
				{
					display: 'flex',
					flexDirection: 'column',
					paddingTop: '0px',
					paddingBottom: '0px',
				}
			}
			>
				{getCardContentRendered()}
			</AccordionDetails>
		</Accordion>
	);
}

export default UsabilityRatingCard;
