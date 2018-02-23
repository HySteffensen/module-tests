
(function(name, context, definition) {
    "use strict"

    if (typeof module === 'object' && module.exports) {
        module.exports = definition;
    } else {
        context[name] = definition;
    }
    
}("HELLO_function", this, function message() {
    return "Hello from 'hello' module!";
}));

