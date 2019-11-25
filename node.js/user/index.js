// var log = require('./logger')(module);
var db = require('db');
var log = require('logger')(module);
// db.connect();



function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    log(db.getPhrases(this.name + " приветствует ") + "," + who.name);
};

// console.log("index.js is required");

exports.exports = User;

// console.log(module);
