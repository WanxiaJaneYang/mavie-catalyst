/* eslint-disable react/require-default-props */
import { SvgIcon } from '@mui/material';
import PropTypes from 'prop-types';
import Gauge from './Gauge';
import ImportanceRatingGauge from './ImportanceRatingGauge';
import PercentageGauge from './PercentageGauge';

function MavieGauge(props) {
	const {
		type, value, importance, percentages, size, ...other
	} = props;
	switch (type) {
	case 'percentage':
		return (
			// <SvgIcon
			// 	{...other}
			// >
			<PercentageGauge
				value={value}
				importance={importance}
				percentages={percentages}
				size={size}
				{...other}
			/>
			// </SvgIcon>
		);
	case 'importanceRating':
		return (
			// <SvgIcon {...other}>
			<ImportanceRatingGauge
				value={value}
				importance={importance}
				size={size}
				{...other}
			/>
			// </SvgIcon>
		);
	default:
		return (
			// <SvgIcon
			// 	{...other}
			// >
			<Gauge
				value={value}
				size={size}
				{...other}
			/>
			// </SvgIcon>
		);
	}
}

MavieGauge.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	importance: PropTypes.number,
	size: PropTypes.number,
	percentages: PropTypes.arrayOf(PropTypes.number),
};
export default MavieGauge;
