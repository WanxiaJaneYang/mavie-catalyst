import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ScoreBar from '../../ScoreBar';

function FeatureList({ domainId, importanceRatingOn }) {
	return (
		<Box>
			<Typography
				sx={{
					color: '#000000',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '16px',
					textAlign: 'left',
				}}
			>
				Features
			</Typography>
			<ScoreBar
				score={3.5}
				importance={0.2}
				importanceRatingOn={importanceRatingOn}
			/>
		</Box>
	);
}

FeatureList.propTypes = {
	domainId: PropTypes.number.isRequired,
	importanceRatingOn: PropTypes.bool.isRequired,
};

export default FeatureList;
