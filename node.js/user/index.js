var db = require('db');
var logger = require('logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    logger(db.getPhrases('Hello') + ", " + who.name);
};

module.exports.User = User;
