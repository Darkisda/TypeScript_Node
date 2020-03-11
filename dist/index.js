"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BuscaEmLargura_1 = __importDefault(require("./BuscaEmLargura"));
var buscaEmLargura = new BuscaEmLargura_1.default();
console.log("Hello There :)");
var arrayString = [['1', '2', '3'], ['4', '5', '6']];
//buscaEmLargura.buscar(arrayString, 2, 3, 4, 5)
buscaEmLargura.inicializar();
