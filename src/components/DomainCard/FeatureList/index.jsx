import PropTypes from 'prop-types';
import {
	Box, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import FeatureRow from '../FeatureRow';

function FeatureList({ domainId, importanceRatingOn }) {
	const featureIds = useSelector((state) => state.domain.entities[domainId].features);

	const [showFeatureCard, setShowFeatureCard] = useState(false);
	const [selectedFeatureId, setSelectedFeatureId] = useState(null);

	const handleFeatureCardClose = () => {
		setShowFeatureCard(false);
	};

	const handleFeatureRowClick = () => {
		setShowFeatureCard(true);
	};

	const getFeatureScoreRows = () => featureIds.map((featureId) => (
		<FeatureRow
			featureId={featureId}
			importanceRatingOn={importanceRatingOn}

		/>
	));

	return (
		<Box>
			<Typography
				sx={{
					color: '#000000',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '16px',
					textAlign: 'left',
					marginBottom: '10px',
				}}
			>
				Features
			</Typography>
			<Box
				overflow="auto"
				sx={{
					height: '150px',
					width: '100%',
					paddingRight: '16px',
					paddingLeft: '16px',
				}}
			>
				{getFeatureScoreRows()}
			</Box>

		</Box>
	);
}

FeatureList.propTypes = {
	domainId: PropTypes.number.isRequired,
	importanceRatingOn: PropTypes.bool.isRequired,
};

export default FeatureList;
