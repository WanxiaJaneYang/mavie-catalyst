import { useSelector } from 'react-redux';
import {
	Typography,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import { useState, useEffect } from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import colors from '../../../../theme/colors';
import ProductIntroSkeleton from './ProductIntroSkeleton';
import ProductIntroContent from './ProductIntroContent';
import ErrorMessage from '../../../../components/ErrorMessage';
import ProductIntroCardHeader from './ProductIntroCardHeader';

function ProductIntroCard() {
	const { loading, error } = useSelector((state) => state.product.productInfo);
	const productDetail = useSelector((state) => state.product.productInfo
		.productDetail);

	useEffect(
		() => {
			if (error) {
				handleErrorMessageOpen();
			}
		},
		[error],
	);

	const [errorMessageOpen, setErrorMessageOpen] = useState(false);

	const handleErrorMessageOpen = () => {
		setErrorMessageOpen(true);
	};

	const handleErrorMessageClose = () => {
		setErrorMessageOpen(false);
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
				aria-controls="panel1a-content"
				id="panel1a-header"
				sx={{
					backgroundColor: colors.white,
				}}
			>
				<ProductIntroCardHeader />
			</AccordionSummary>
			<AccordionDetails
				sx={
					{
						display: 'flex',
						flexDirection: 'column',
						paddingTop: '0px',
						paddingBottom: '0px',
					}
				}
			>
				{loading && <ProductIntroSkeleton />}
				{!loading && error && (
					<ErrorMessage
						message={error}
						open={errorMessageOpen}
						handleClose={handleErrorMessageClose}
					/>
				)}
				{!loading && !error && !productDetail && <Typography>No product info</Typography>}
				{!loading && productDetail && <ProductIntroContent />}
			</AccordionDetails>

		</Accordion>
	);
}

export default ProductIntroCard;
