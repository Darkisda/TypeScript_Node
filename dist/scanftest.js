"use strict";
var scanf = require('scanf');
console.log("Diga seu nome");
var nome = scanf('%s');
console.log("Diga sua idade");
var idade = scanf('%d');
console.log("Seu nome é [%s], tipo: [%s]", nome, typeof nome);
console.log("Sua idade é [%s], tipo: [%s]", idade, typeof idade);
