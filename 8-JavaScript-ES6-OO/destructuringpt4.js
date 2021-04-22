//Array
let arr = [10, 20, 30, 40]

let [ a, ...resto ] = arr

console.log(a)
console.log(resto)



//Objeto
let obj = {
    a: 10, b: 20, c: 30, d:40
}

let { a, ...y } = obj //Rest por estar juntando valores 
console.log(a)
console.log(y)