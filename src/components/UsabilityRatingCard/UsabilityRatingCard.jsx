import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
	Accordion, Card, Box, Typography, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function UsabilityRatingCard({ productId }) {
	const productData = useSelector((state) => state.product.productData);
	return (
		<Accordion>
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
			<AccordionDetails />
		</Accordion>
	);
}

UsabilityRatingCard.propTypes = {
	productId: PropTypes.number.isRequired,
};

export default UsabilityRatingCard;
