"use strict";

(function(context) {
        
    var tests = function hello(logMsg) {
        return logMsg("Hello")();
    }

    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = tests;
    } else {
        context.tests = tests;
    }

})(this);

