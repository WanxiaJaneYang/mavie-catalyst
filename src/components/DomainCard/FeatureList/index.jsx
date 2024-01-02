import PropTypes from 'prop-types';
import {
	Box, Skeleton, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import FeatureRow from '../FeatureRow';

function FeatureList({ domainId, importanceRatingOn }) {
	const featureIds = useSelector((state) => state.domain.entities[domainId].featureIds);
	const { loading, error, entities } = useSelector((state) => state.feature);

	const getFeatureRowRendered = (featureId) => {
		if (error) {
			return null;
		}
		if (loading) {
			return (
				<Skeleton
					key={`${featureId}-feature-row`}
					variant="rectangular"
					width="100%"
					height={20}
					sx={{ margin: '5px' }}
				/>
			);
		}
		if (!error && entities && entities[featureId]) {
			return (
				<FeatureRow
					key={`${featureId}-feature-row`}
					domainId={domainId}
					featureId={featureId}
					importanceRatingOn={importanceRatingOn}
				/>
			);
		}
		return null;
	};

	const getFeatureScoreRows = () => featureIds && featureIds.map((featureId) => (
		getFeatureRowRendered(featureId)
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
					paddingRight: '8px',
					paddingLeft: '8px',
				}}
			>
				{getFeatureScoreRows()}
			</Box>

		</Box>
	);
}

FeatureList.propTypes = {
	domainId: PropTypes.string.isRequired,
	importanceRatingOn: PropTypes.bool.isRequired,
};

export default FeatureList;
