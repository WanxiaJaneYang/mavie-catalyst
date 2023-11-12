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

function ProductIntroCard() {
	const productDetail = useSelector((state) => state.product.productInfo
		.productDetail);

	return (
		<Accordion
			sx={
				{ marginBottom: '16px' }
			}
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
				<Card
					sx={{
						display: 'flex',
						flexDirection: 'row',
						padding: '16px',
						paddingTop: '0px',
						marginTop: '0px',
						width: '100%',
						border: 'none',
					}}
					elevation={0}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'start',
							justifyContent: 'center',
							marginBottom: '16px',
							gap: '16px',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'start',
								justifyContent: 'center',
								marginBottom: '16px',
							}}
						>
							<Typography
								sx={{
									fontSize: '12px',
									fontWeight: 400,
									fontFamily: 'Inter, sans-serif',
									textAlign: 'left',
									marginBottom: '16px',
									color: colors.grey,
								}}
							>
								{productDetail?.productCategoryName}

							</Typography>
							<MavieRating
								value={productDetail?.rating}
								readOnly
								sx={{
									marginBottom: '16px',
								}}
							/>
							<Typography
								sx={{
									fontSize: '12px',
									fontWeight: 600,
									fontFamily: 'Inter, sans-serif',
									textAlign: 'left',
									marginBottom: '8px',
								}}
							>
								Description
							</Typography>
							<Typography
								sx={{
									fontSize: '12px',
									fontWeight: 400,
									fontFamily: 'Inter, sans-serif',
									textAlign: 'left',
									marginBottom: '16px',
								}}
							>
								{productDetail?.description}
							</Typography>
						</Box>
						<Box
							sx={
								{
									display: 'flex',
									width: '40%',
									height: 155,
								}
							}
						>
							<CardMedia
								component="img"
								image={productDetail?.productImage}
								title={productDetail?.productModalName}
							/>

						</Box>
					</Box>
				</Card>
			</AccordionDetails>

		</Accordion>
	);
}

export default ProductIntroCard;
