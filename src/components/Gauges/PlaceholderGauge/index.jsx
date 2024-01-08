/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { arc } from 'd3-shape';
import getTransitionColor from '../PercentageGauge/getTransitionColor';

function PlaceholderGauge({
	size = 1,
}) {
	return (
		<svg
			style={{ overflow: 'visible' }}
			width={`${size * 9}em`}
			viewBox={[-1, -1, 2, 1].join(' ')}
		>
			{getPercentagePaths([0.2, 0.2, 0.2, 0.2, 0.2]).map((path, index) => (
				// console.log(path);(
				<React.Fragment key={`${index} group`}>
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

const getPercentagePaths = (percentages) => {
	// console.log(percentages);
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
		const textAngle = ((endAngle + startAngle) / 2) * 1.1;
		const textX = Math.cos(textAngle - Math.PI / 2) * 1.2;
		const textY = Math.sin(textAngle - Math.PI / 2) * 1.2 < -1
			? Math.sin(textAngle - Math.PI / 2) * 1.15 + 0.05
			: Math.sin(textAngle - Math.PI / 2) * 1.15;
		const textContent = 'x%';
		paths.push({
			d: percentageArc,
			fill: color,
			textPosition: [textX, textY],
			textContent,
		});
		startPercentage += percentages[i];
		startAngle = endAngle;
	}
	// console.log(paths);
	return paths;
};

export default PlaceholderGauge;
