import React from 'react';
import PropTypes from 'prop-types';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

const isValidSvg = (data) => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(data, 'image/svg+xml');
	return doc.documentElement.nodeName.toLowerCase() === 'svg';
};

// This component directly renders the SVG data

function DynamicSvg({ svgData, ...props }) {
	// Check if the SVG data is valid
	if (!isValidSvg(svgData)) {
		// Fallback to a default icon if the SVG data is invalid
		return <ReportProblemOutlinedIcon {...props} />;
	}
	// Directly set the SVG XML as the inner HTML of this component
	return <div dangerouslySetInnerHTML={{ __html: svgData }} {...props} />;
}

DynamicSvg.propTypes = {
	svgData: PropTypes.string.isRequired,
};

export default DynamicSvg;
