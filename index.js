const { Timer } = require('timer-node');

crypter = require('./fonction/crypter');
decrypter = require('./fonction/decrypter');

const timer = new Timer({});

console.log(crypter.crypteText("rudy"))

console.log(decrypter.decrypteText("Ê7öFèS`2Kôûc"))
