'use strict';

/**
 * @name printBlock
 * 
 * @param {String} lines 
 */
const printBlock = (...lines) => {
	console.clear();
	console.log();

	if (lines.length > 1) {
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			console.log(line);
		}
	} else {
		console.log(lines[0]);
	}
	
	console.log();
};

module.exports = printBlock;