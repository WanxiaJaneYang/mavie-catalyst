import { useSelector } from 'react-redux';
import {
	Box, Card, CardMedia, Typography,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MavieRating from '../../../../components/MavieRating';
import colors from '../../../../theme/colors';
import ProductIntroSkeleton from './ProductIntroSkeleton';
import ProductIntroContent from './ProductIntroContent';

function ProductIntroCard() {
	const { loading, error } = useSelector((state) => state.product.productInfo);
	const productDetail = useSelector((state) => state.product.productInfo
		.productDetail);

	return (
		<Accordion
			sx={
				{ marginBottom: '16px' }
			}
			defaultExpanded
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				sx={{
					backgroundColor: colors.white,
					padding: '16px',
					'& .MuiAccordionSummary-content': {
						margin: '0px',
					},
				}}
			>
				<Typography
					sx={{
						fontSize: '18px',
						fontWeight: 600,
						fontFamily: 'Inter, sans-serif',
						textAlign: 'left',
						marginLeft: '16px',
					}}
				>
					{productDetail?.modelName}
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={
					{
						marginTop: '-16x',
						paddingTop: '0px',
					}
				}
			>
				{loading && <ProductIntroSkeleton />}
				{!loading && error && <Typography>{error}</Typography>}
				{!loading && !error && !productDetail && <Typography>No product info</Typography>}
				{!loading && productDetail && <ProductIntroContent />}
			</AccordionDetails>

		</Accordion>
	);
}

export default ProductIntroCard;
