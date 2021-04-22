class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }
    dormir() {
        console.log('dormir')
    }
}
class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) { 
        super(cor, tamanho, peso) 
        this.bico = bico
    }
    voar() {
        console.log('voar')
    }
}
class Papagaio extends Passaro { 
    constructor(sabeFalar, cor, tamanho, peso) { 
        super('Médio', cor, tamanho, peso) 
        this.sabeFalar = sabeFalar 
    }
    falar() {
        console.log('Falar')
    }
}

class Avestruz extends Passaro{
    constructor(){
        super('Grande', 'Verde', 250, 1500)
    }
    EnterrarCabeca(){
        console.log('Enterrar a Cabeca')
    }
    voar(){
        console.log('Não sabe voar')
    }
}

let papagaio = new Papagaio(true, 'verde', 25, 352)
console.log(papagaio)

let avestruz = new Avestruz()

