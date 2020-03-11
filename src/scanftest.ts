let scanf = require('scanf')

console.log("Diga seu nome")
let nome = scanf('%s')

console.log("Diga sua idade")

let idade = scanf('%d')

console.log("Seu nome é [%s], tipo: [%s]", nome, typeof nome)
console.log("Sua idade é [%s], tipo: [%s]", idade, typeof idade)