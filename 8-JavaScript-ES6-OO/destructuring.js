//Destructuring: tira valores de dentro de uma estrutura

let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']


//Declarando variávies novas pulando o indice 2
//Podemos utilizar parametros default
let [a, b , , c, d = 'Banana'] = frutas //Esta extraindo os valores atribuidos na array frutas e atribuindo-os as letras

console.log(a, b, c, d)
let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José', 'Maria']]//Array Bidimensional
let [,[,n2]] = coisas
console.log(n2)
let [,,,n4] = coisas
console.log(n4)