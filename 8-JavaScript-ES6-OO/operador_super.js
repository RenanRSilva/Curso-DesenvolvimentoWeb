class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor //Atribuimos os parametros recebidos na função construtora aos atributos da classe
        this.tamanho = tamanho
        this.peso = peso
    }
    dormir() {
        console.log('dormir')
    }
}
class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) { //Variavel do escopo da função construtora
        super(cor, tamanho, peso) //Nos da acesso ao construtor da classe pai
        this.bico = bico
    }
    voar() {
        console.log('voar')
    }
}
class Papagaio extends Passaro { //Recebe atributos e metodos de passaro e animal
    constructor(sabeFalar, cor, tamanho, peso) { //Variavel do contexto da função
        super('Médio', cor, tamanho, peso) //Encaminahndo para classe passaro o parametro bico para o construtor
        this.sabeFalar = sabeFalar //Variavel do contexto da classe
    }
    falar() {
        console.log('Falar')
    }
}

let papagaio = new Papagaio(true, 'verde', 25, 352)
console.log(papagaio)
let papagaio2 = new Papagaio(false, 'branco', 10, 80)
console.log(papagaio2)

//Passar os parametros na instancia do objeto
//Através do super os parametros vão subindo pelas classe pais até chegar no ponto ideal para fazer atribuição