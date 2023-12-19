import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { Box } from '@mui/material';

function DynamicSvg({ svgData, ...props }) {
	const [hasError, setHasError] = useState(false);

	const imgStyle = {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
	};

	const handleOnError = () => {
		setHasError(true);
	};

	if (!svgData || hasError) {
		return <ReportProblemOutlinedIcon {...props} />;
	}

	return (
		<Box {...props}>
			<img
				src={svgData}
				alt="Dynamic SVG"
				onError={handleOnError}
				style={imgStyle}
			/>
		</Box>
	);
}

DynamicSvg.propTypes = {
	svgData: PropTypes.string.isRequired,
};

export default DynamicSvg;
