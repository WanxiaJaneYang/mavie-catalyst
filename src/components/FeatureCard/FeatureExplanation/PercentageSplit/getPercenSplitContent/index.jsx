const getPercentSplitContent = (array) => {
	const baseContent = 'Percentages split: representation of the percentage of individual rating scores from 1 to 5.';
	let specialContent = 'Out of the total respondents';
	let containsZero = false;
	// if
	if (array && array.length > 0) {
		for (let i = 0; i < array.length; i += 1) {
			const floatImportance = parseFloat(array[i].importance);
			if (floatImportance === 0) {
				containsZero = true;
			} else {
				const tempPercent = floatImportance * 100;
				specialContent += `, ${tempPercent.toFixed(0)}% gave a rating of ${i + 1}`;
			}
		}
	}

	if (containsZero) {
		return `${specialContent}.`;
	}
	return baseContent;
};

export default getPercentSplitContent;
