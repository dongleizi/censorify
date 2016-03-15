var censoreWords=["sad","bad","mad"];
var customCensoreWords=[];
function censor (inStr) {
	// body...
	for (idx in censoreWords) {
		inStr=inStr.replace(censoreWords[idx],"****");
	};
	for (idx in customCensoreWords) {
		inStr=inStr.replace(customCensoreWords[idx],"****")
	};
	return inStr;
}
function addCensoredWOrd (word) {
	// body...
	customCensoreWords.push(word);
}
function getCensoreWords () {
	// body...
	return censoreWords.concat(customCensoreWords);
}
exports.censor;
exports.addCensoredWOrd=addCensoredWOrd;
exports.getCensoreWords=getCensoreWords;