//array///////////////////
/*
let arr = [10, 20, 30, 40]
function teste(a, b){
    console.log(a, b)
}
function teste([a, b, , c, d=100]){
console.log(a, b, c, d)}
*/


//Objeto/////////////////
let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
}

function teste({a, b, z=10}){
    console.log(a, b, z)
}
teste(obj)
