
var lista_numeros = Array()

lista_numeros[0] = '1'
lista_numeros[1] = '12'
lista_numeros[2] = '40'
lista_numeros[3] = '3'
lista_numeros[4] = '7'
lista_numeros[5] = '19'

console.log(lista_numeros.sort(ordernaNumeros)) //Função de callback

function ordernaNumeros(a, b){
    return a - b
    // < 0 = a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == a ordem é matida
}


