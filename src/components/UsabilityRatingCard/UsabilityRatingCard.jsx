import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
	Accordion, Card, Box, Typography, AccordionSummary, AccordionDetails, Skeleton, Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UsabilityRatingCardSkeleton from './UsabilityRatingCardSkeleton';
import UsabilityRatingCardContent from './UsabilityRatingCardContent';

function UsabilityRatingCard({ productId }) {
	const { loading, error, data } = useSelector((state) => state.product.productData.overall);

	return (
		<Accordion
			sx={
				{
					marginBottom: '10px',
				}
			}
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
				{loading && <UsabilityRatingCardSkeleton />}
				{/* <Typography
					sx={{
						color: '#000000',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 500,
						fontSize: '14px',
						textAlign: 'start',
					}}
				>
					{productData.usabilityRating}
				</Typography> */}
				{!loading && !error && data && <UsabilityRatingCardContent data={data} />}
			</AccordionDetails>
		</Accordion>
	);
}

UsabilityRatingCard.propTypes = {
	productId: PropTypes.number.isRequired,
};

export default UsabilityRatingCard;
