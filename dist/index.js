"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BuscaEmProfundidade_1 = __importDefault(require("./BuscaEmProfundidade"));
var buscaEmProfundidade = new BuscaEmProfundidade_1.default();
console.log("Hello There :)");
var inicio;
var final;
inicio = {
    x: 0,
    y: 1
};
final = {
    x: 6,
    y: 5
};
var arrayString = [
    ['#', '$', '#', '#', '#', '#', '#'],
    ['#', '0', '#', '#', '#', '#', '#'],
    ['#', '0', '#', '#', '#', '#', '#'],
    ['#', '0', '#', '#', '#', '#', '#'],
    ['#', '0', '#', '#', '#', '#', '#'],
    ['#', '0', '0', '0', '0', '0', '#'],
    ['#', '#', '#', '#', '#', '_', '#'],
];
buscaEmProfundidade.buscar(arrayString, inicio, final);
