//Um software de mercenaria
//Cadeira e sofa

//Paradigma Procedural/////////////////////////////////////
/*
//Cadeira
let qtde_pernas = 4
let giratoria = false
let cor = 'azul'

//array de cadeiras
let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0] = ['qtde_pernas'] = 4
cadeiras[0] = ['giratória'] = false
cadeiras[0] = ['cor'] = 'azul'

cadeiras[1] = Array()
cadeiras[1] = ['qtde_pernas'] = 1
cadeiras[1] = ['giratória'] = true
cadeiras[1] = ['cor'] = 'vermelha'

function girar_cadeira(indice){
    if(cadeiras[indice]['giratoria'] === true){
        console.log('girou')
    }else{
        console.log('cadeira não é giratória')
    }
}

function adicionar_cadeira(qtde_pernas, giratoria, cor){
    let cadeira = Array()

    cadeira['qtde_pernas'] = qtde_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

    cadeiras.push(cadeira)
}
adicionar_cadeira(2, true, 'red')

console.log(cadeiras)

girar_cadeira(0)
*/

/////Paradigma de orientação a Objetos//////////////////////
class Cadeira{
    constructor(qtde_pernas, giratoria, cor){
        this.qtde_pernas = qtde_pernas //Variaveis com this fazem referencia ao objeto e sem this ao escopo da função
        this.giratoria = giratoria
        this.cor =  cor
    }

    girarCadeira(){
        if(this.giratoria === true){
            console.log('girou')
        }else{
            console.log('cadeira não é giratória')

        }
    }
}
//O adicionar cadeira será a instância de um nobo objeto baseado na classe
/*let cadeira = new Cadeira(4, false, 'azul') //O operador new instancia um objeto baseado em uma classe
let cadeira2 = new Cadeira(1, true, 'vermelha') //O operador new instancia um objeto baseado em uma classe
*/
let cadeiras =  Array()
cadeiras.push(new Cadeira(4, false, 'azul'))
cadeiras.push(new Cadeira(1, true, 'vermelha'))
console.log(cadeiras)


