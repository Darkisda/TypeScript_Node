import BuscaEmProfundidade from './BuscaEmProfundidade'

import Pair from './Pair'

let buscaEmProfundidade = new BuscaEmProfundidade()

console.log("Hello There :)")

let inicio: Pair<number, number>
let final: Pair<number, number>

inicio = {
    x: 0,
    y: 1
}

final = {
    x: 6,
    y: 5
}

let arrayString: string[][] = [
    ['#','$','#','#','#','#','#'],
    ['#','0','#','#','#','#','#'],
    ['#','0','#','#','#','#','#'],
    ['#','0','#','#','#','#','#'],
    ['#','0','#','#','#','#','#'],
    ['#','0','0','0','0','0','#'],
    ['#','#','#','#','#','_','#'],
]

buscaEmProfundidade.buscar(arrayString, inicio, final)