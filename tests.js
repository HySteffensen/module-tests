"use strict";

(function() {
    var root = this;
        
    var tests = function hello(logMsg) {
        return logMsg("Hello");
    }

    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = tests;
    } else {
        root.tests = tests;
    }

}).call(this);

