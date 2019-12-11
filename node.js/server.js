var log = require('logger')(module);
var db = require('db');
db.connect();
// Не поняла про кэширование модулей.

var User = require('user');

function run() {
    var vasya = new User.User("Вася");
    var petya = new User.User("Петя");

    vasya.hello(petya); // Не понимаю эту конструкцию, почему там vasya и petya?

    console.log(db.getPhrases("Run successful"));
}

if (module.parent) {
    exports.run = run;
} else {
  run ();
}