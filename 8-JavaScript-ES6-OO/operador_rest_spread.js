//Contexto spread
/*Spread pega os dados e os distribui dentro de outras estrutura*/
//String
let tituloArtigo = 'Como utilizar o operador rest/spread'

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])//Espalha a string dentro de um array

//Arrays
let listaCursos1 = ['NodeJS e MongoDB', 'ES6, TypeScript e Angular 4']
let listaCursos2 = ['Multiplataforma Android/IOS', 'Introdução ao GNU/Linux']
let listaCursosCompleto = ['Web Completo', 'Android Completo', ...listaCursos1, ...listaCursos2]

console.log(listaCursosCompleto)

//Objetos
let pessoa = {nome: 'João', idade: 27}
let clone = {endereco: 'Rua Abc', ...pessoa}

console.log(clone)

