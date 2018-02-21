tests = require("./tests")(logMsg);

function logMsg(msg) {
	return function() {
		console.log(msg);
	};
}