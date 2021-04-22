//Requisição http
//Resposta http

let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'única',
    aro: 12,
    pedalar() {console.log('Método pedalar executado')}
}
let Bicicleta2 = {
    cor: 'Vermelha',
    marcha: '18',
    aro: 26,
    pedalar() {console.log('Método pedalar executado')}
}

console.log(Bicicleta1)
console.log(Bicicleta2)


//-------------------------------------
let BicicletaFactory = function(cor, marcha, aro){ // Passar os parametros a serem recebidos
    //lógica
    //Requisição http
    //Resposta http
    
    return {
        cor, // O nome da variavel vira o nome da chave, o valor da variavel vira o valor associado a chave
        marcha,
        aro,
        tipoPedal,
        pedalar() {
            console.log('Método pedalar executar')
        }
    }
}

let Bicicleta3 = BicicletaFactory('Vermelha', '18', 26)//Passar os parametros
console.log(Bicicleta3)
let Bicicleta4 = BicicletaFactory('Preta', '21', 29)//Passar os parametros
console.log(Bicicleta3)

console.log(`Cor: ${Bicicleta3.cor}`)
Bicicleta3.pedalar()