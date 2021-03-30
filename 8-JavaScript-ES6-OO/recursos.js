//Template String
function calcular (x, y){
    return x * y
}

console.log(`A multiplicação de 8 * 8 é: ${calcular(8,8)}`)


//let
let nome = 'Renan'

//Const
const sobrenome = 'Silva'

//Parametros Default
function contarUmaHistoria(personagem = 'Fubá', atividade = 'Correr no Parque', nome_dono  = 'João') {
   console.log(`Era uma vez um cachorro chamado ${personagem}, ele adorava ${atividade}, seu dono era o ${nome_dono} e eles viveram felizes `)
}

contarUmaHistoria('José', 'brincar', 'felipe')

//Arrow Function 
let quadrado = x => {return x * x}

//Verificar se o numero é par ou impar
/*let parOuImpar = function(numero){
    let calculo = numero % 2 
    if(numero % 2 === 0){
    return 'par'
} else{
    return 'ímpar'
}
}
*/

let parOuImpar = numero => numero % 2 === 0 ? 'par' : 'impar' //Return Implicito

console.log(parOuImpar(155))

console.log(parOuImpar(7))