// var log = require('logger')(module);

module.exports = function(module) {
    return function(/* ... */) {
        var args = [module.filename].concat([].slice.call(arguments));
        console.log.apply(console, args);
    };
};

// сделала всё как в уроке - не работает, попробовала скопировать и запустить код с репозитория курса - тоже не работает.