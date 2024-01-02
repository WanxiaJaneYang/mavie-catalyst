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
import ProductIntroCardHeader from './ProductIntroCardHeader';

function ProductIntroCard() {
	const { loading, error } = useSelector((state) => state.product.productInfo);
	const productDetail = useSelector((state) => state.product.productInfo
		.productDetail);

	const renderProductIntroContent = () => {
		if (error) {
			return null;
		}
		if (loading) {
			return <ProductIntroSkeleton />;
		}
		if (productDetail) {
			return <ProductIntroContent />;
		}

		return <Typography>No product info</Typography>;
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
				{renderProductIntroContent()}
			</AccordionDetails>

		</Accordion>
	);
}

export default ProductIntroCard;
