// this function will receive a string, parse it by spaces,
// and for any word that is longer than 8 characters,
// it will insert a space at the 8th character and
// add a hyphen at the end of the first part of the word.
// It will then return the string with the new formatting.
const wordParser = (string) => {
	let parsedString = '';
	// split by spaces and hyphens
	const stringArray = string.split(/[\s-]+/);
	stringArray.forEach((word) => {
		// if the word is longer than 10 and the pre is not '-'
		if (word.length > 10 && word[10] !== '-' && word.length !== 11) {
			parsedString += `${word.slice(0, 10)}- ${word.slice(10)} `;
		} else {
			parsedString += `${word} `;
		}
	});
	return parsedString;
};

export default wordParser;
