

//Object.prototype

Object.prototype.attr50 = 'Z'

let animal = {attr1: 'a'}
let vertebrado = {__proto__: animal, attr2: 'b'}
let ave = {__proto__: vertebrado, attr3: 'c', attr2: 'x'} //O prototipo de ave é vertebrado
//attr2 = sobreposição do atributo
console.log(ave.attr3, ave.attr2, ave.attr1, ave.attr50)