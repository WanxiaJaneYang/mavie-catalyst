export default function getTransitionColor(percentage, startColor = '#D8B2FA', endColor = '#891AEE') {
	const parseColor = (color) => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16),
		} : null;
	};

	const lerp = (start, end, fraction) => (start + fraction * (end - start));

	const startParsed = parseColor(startColor);
	const endParsed = parseColor(endColor);

	if (!startParsed || !endParsed) {
		throw new Error('Invalid color format. Use hexadecimal format e.g., #RRGGBB');
	}

	const r = Math.round(lerp(startParsed.r, endParsed.r, percentage));
	const g = Math.round(lerp(startParsed.g, endParsed.g, percentage));
	const b = Math.round(lerp(startParsed.b, endParsed.b, percentage));

	// eslint-disable-next-line no-bitwise
	return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
}
