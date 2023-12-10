import PropTypes from 'prop-types';
import {
	Box, Skeleton, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import FeatureRow from '../FeatureRow';
import ErrorMessage from '../../ErrorMessage';

function FeatureList({ domainId, importanceRatingOn }) {
	const featureIds = useSelector((state) => state.domain.entities[domainId].featureIds);
	const { loading, error, entities } = useSelector((state) => state.feature);

	const [errorMessageOpen, setErrorMessageOpen] = useState(false);

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

	const getFeatureRowRendered = (featureId) => {
		if (loading) {
			return (
				<Skeleton variant="rectangular" width="100%" height={20} sx={{ margin: '5px' }} />
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
					paddingRight: '16px',
					paddingLeft: '16px',
				}}
			>
				{error && (
					<ErrorMessage
						open={errorMessageOpen}
						handleClose={handleErrorMessageClose}
						message={error}
					/>
				)}
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
