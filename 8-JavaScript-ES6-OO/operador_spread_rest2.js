//Contexto rest

function soma(...param){ //Rest recebe todos os parametros e os junta em uma estrutura de array
    let resultado = 0

    console.log(param)

    param.forEach(v => resultado += v)

    return resultado
}

console.log(soma(3, 8, 5, 7, -8, 10, 115))

function multiplicacao(m, ...p){//O primeiro parametro sera recebido pelo primeiro parametro da função e os demais serão unificados pelo operador rest
    console.log(m)
    let resultado = 0
    console.log(p)

    p.forEach(v => resultado += m * v) //Multplica o m pelo parametro contido no indice do array, cada um dos parametros serão multiplicados por 5 e o resultado ser atribuido a variável resultado que sera retornado

    return resultado
}

multiplicacao(5, 7, 12, 3, 49) //Valores indefinidos podem ser encaminhados como ultimos parametros da função
