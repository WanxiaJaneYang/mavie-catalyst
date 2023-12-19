/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { arc } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import getTransitionColor from './getTransitionColor';

function PercentageGauge({
	value = 0, importance = 0.2, percentages = [0.15, 0.15, 0.22, 0.2, 0.28], min = 0, max = 5,
	size = 1,
}) {
	// set up the arc generator for the background
	// const backgroundArc = arc()
	// 	.innerRadius(0.65)
	// 	.outerRadius(1)
	// 	.startAngle(-Math.PI / 2)
	// 	.endAngle(Math.PI / 2)
	// 	.cornerRadius(0)();
	if (importance > 1) {
		// eslint-disable-next-line no-param-reassign
		importance /= 5;
	}
	const importanceAngle = importance * Math.PI - 0.5 * Math.PI;
	const importanceArc = arc()
		.innerRadius(0.65)
		.outerRadius(0.7)
		.startAngle(-Math.PI / 2)
		.endAngle(importanceAngle)
		.cornerRadius(0)();

	// calculate the percentage and angle for the value
	const percent = PercentCalculator(value, min, max);

	// determine the arrow path
	const transform = 'translate(-1, -0.05)';
	const transformRotate = `rotate(${percent * 180})`;

	return (
		<svg
			style={{ overflow: 'visible' }}
			width={`${size * 9}em`}
			viewBox={[-1, -1, 2, 1].join(' ')}
		>
			{getPercentagePaths(percentages).map((path, index) => (
				<React.Fragment key={`${index}group`}>
					<path
						key={`${index}path`}
						d={path.d}
						fill={path.fill}
					/>
					<text
						key={`${index}text`}
						x={path.textPosition[0]}
						y={path.textPosition[1]}
						fontSize="0.15"
						fontFamily="Inter, sans-serif"
						textAnchor="middle"
						letterSpacing={0.015}
						fill="#455468"
					>
						{path.textContent}
					</text>
				</React.Fragment>

			))}
			<path d={importanceArc} fill="#ECA72C" />
			<g transform={transformRotate}>
				<g transform={transform}>
					<svg
						width="1"
						height="0.1"
						viewBox="0 0 85 10"
					>
						<rect x="0.5" y="0.5" width="94" height="9" rx="5" fill="#455468" stroke="white" />
					</svg>
				</g>
			</g>
			<text
				x="-0.6"
				y="0.2"
				fontSize="0.15"
				fontFamily="Inter, sans-serif"
				textAnchor="end"
				letterSpacing={0.015}
				fill="#455468"
			>
				Poor
			</text>
			<text
				x="0.50"
				y="0.2"
				fontSize="0.15"
				fontFamily="Inter, sans-serif"
				textAnchor="start"
				letterSpacing={0.015}
				fill="#455468"
			>
				Excellent
			</text>
		</svg>
	);
}

const PercentCalculator = (value, min, max) => {
	const percentScale = scaleLinear().domain([min, max]).range([0, 1]);
	return percentScale(value);
};

const getPercentagePaths = (percentages) => {
	const paths = [];
	let startAngle = -Math.PI / 2;
	let endAngle = 0;
	let startPercentage = 0;
	for (let i = 0; i < percentages.length; i += 1) {
		endAngle = (startPercentage + percentages[i]) * Math.PI - Math.PI / 2;
		// calculate the arc path
		const percentageArc = arc()
			.innerRadius(0.65)
			.outerRadius(1)
			.startAngle(startAngle)
			.endAngle(endAngle)
			.cornerRadius(0)();
		// calculate the color
		const colorPercentage = startPercentage + percentages[i] / 2;
		const color = getTransitionColor(colorPercentage);
		// calculate the text
		// calculate the position of the text
		const textAngle = ((endAngle + startAngle) / 2) * 1.1;
		const textX = Math.cos(textAngle - Math.PI / 2) * 1.2;
		const textY = Math.sin(textAngle - Math.PI / 2) * 1.2 < -1
			? Math.sin(textAngle - Math.PI / 2) * 1.15 + 0.05
			: Math.sin(textAngle - Math.PI / 2) * 1.15;
		const textContent = `${Math.round(percentages[i] * 100)}%`;
		paths.push({
			d: percentageArc,
			fill: color,
			textPosition: [textX, textY],
			textContent,
		});
		startPercentage += percentages[i];
		startAngle = endAngle;
	}
	if (startPercentage < 1) {
		throw new Error('Percentage does not add up to 1');
	}
	return paths;
};

export default PercentageGauge;
