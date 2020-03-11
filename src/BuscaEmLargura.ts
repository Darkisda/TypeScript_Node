import { Queue } from 'queue-typescript'
let scanf = require('scanf')

class BuscaEmLargura {
    
    private tamanho_colunas:number = 0
    private tamanho_linhas:number = 0

    constructor(){
    }

    inicializar(){
        console.log("Informe o número de Linhas")
        this.tamanho_linhas = scanf('%d')

        console.log("Informe o número de Colunas")
        this.tamanho_colunas = scanf('%d')
    }

    buscar(array:string[][], initX:number, initY:number, endX:number, endY:number){
        let filaX = new Queue<number>(initX)
        let filaY = new Queue<number>(initY)
        

        array.map(i=>console.log(i))
        console.log(initX)
        console.log(initY)
        console.log(endX)
        console.log(endY)
    }

    private estaValido(arr:string[][], posX:number, posY:number):boolean{
        if(posX < 0 || posY < 0) {
            return false
        }
        else if(arr[posX][posY]==='#') {
            return false
        }
        return true
    }

    private possibilidade(posX:number, posY:number){
        /**ToDo */
    }
}

export default BuscaEmLargura