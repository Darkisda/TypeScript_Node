"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queue_typescript_1 = require("queue-typescript");
var scanf = require('scanf');
var BuscaEmLargura = /** @class */ (function () {
    function BuscaEmLargura() {
        this.tamanho_colunas = 0;
        this.tamanho_linhas = 0;
    }
    BuscaEmLargura.prototype.inicializar = function () {
        console.log("Informe o número de Linhas");
        this.tamanho_linhas = scanf('%d');
        console.log("Informe o número de Colunas");
        this.tamanho_colunas = scanf('%d');
    };
    BuscaEmLargura.prototype.buscar = function (array, initX, initY, endX, endY) {
        var filaX = new queue_typescript_1.Queue(initX);
        var filaY = new queue_typescript_1.Queue(initY);
        array.map(function (i) { return console.log(i); });
        console.log(initX);
        console.log(initY);
        console.log(endX);
        console.log(endY);
    };
    BuscaEmLargura.prototype.estaValido = function (arr, posX, posY) {
        if (posX < 0 || posY < 0) {
            return false;
        }
        else if (arr[posX][posY] === '#') {
            return false;
        }
        return true;
    };
    BuscaEmLargura.prototype.possibilidade = function (posX, posY) {
        /**ToDo */
    };
    return BuscaEmLargura;
}());
exports.default = BuscaEmLargura;
