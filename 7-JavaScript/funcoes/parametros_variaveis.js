function soma(){
    var resultado = 0
    for (var i in arguments){ //For in retorna o indice das posições do array que ele percorre
    console.log(arguments[i]) //Recuperamos o valor contido em uma determinada posição do arrau
    resultado += arguments[i]
    }
    return resultado
}

console.log(soma(7, 5, 3.2, 0.8, 'Texto'))