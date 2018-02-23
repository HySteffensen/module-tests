"use strict";

(function UMD(name, context, dependency, definition) {
        
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = definition(require(dependency));
    } else {
        context[name] = definition();
    }
    
})("HELLO_test", this, './hello', function DEF() {

    function tests(logMsg) {
        logMsg(HELLO())();
    }

    return tests;
});

