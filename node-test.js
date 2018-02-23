
function logMsg(msg) {
	return function() {
		console.log(msg);
	};
}

var path = require("path");
HELLO = require(path.join(__dirname, "hello"));
tests = require(path.join(__dirname, "tests"))(logMsg);