var user = require('./user');

function run() {
    var vasya = new user.User("Вася");
    var petya = new user.User("Петя");

    vasya.hello(petya); // Не понимаю эту конструкцию, почему там vasya и petya?
}

if (module.parent) {
    exports.run = run;
} else {
  run ();
}