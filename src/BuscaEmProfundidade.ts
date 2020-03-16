let scanf = require('scanf')

import Pair from './Pair'

class BuscaEmProfundidade {
    
    private labirinto:string[][]

    constructor(){
        this.labirinto = new Array<string[]>()
    }

    public buscar(arr: string[][], inicio: Pair<number, number>, final: Pair<number, number>):void{
        this.labirinto = arr
        
        if(this.invalid(inicio)){
            return
        }
        if(inicio === final) {
            console.log("Achei")
            return
        }
        else {
            this.buscar(this.labirinto, new Pair<number, number>(inicio.x+1, inicio.y), final)
            this.buscar(this.labirinto, new Pair<number, number>(inicio.x-1, inicio.y), final)
            this.buscar(this.labirinto, new Pair<number, number>(inicio.x, inicio.y+1), final)
            this.buscar(this.labirinto, new Pair<number, number>(inicio.x+1, inicio.y-1), final)
        }
    }

    
    private invalid(par: Pair<number, number>):boolean {
        console.log(par)
        
        if(par.x < 0 || par.y < 0) {
            return false
        }
        else if (this.labirinto[par.x][par.y] == '#') {
            return false
        }
        else {
            return true
        }
    }
}

export default BuscaEmProfundidade