import React from 'react';
import PropTypes from 'prop-types';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { Box } from '@mui/material';

function DynamicSvg({
	svgData, ...props
}) {
	if (!svgData) {
		return <ReportProblemOutlinedIcon {...props} />;
	}

	const imgStyle = {
		width: '100%',
		height: '100%',
		objectFit: 'contain', // This makes sure the image keeps its aspect ratio
	};

	return (
		<Box {...props}>
			<img src={svgData} alt="Dynamic SVG" style={imgStyle} />
		</Box>
	);
}

DynamicSvg.propTypes = {
	svgData: PropTypes.string.isRequired,

};

export default DynamicSvg;
