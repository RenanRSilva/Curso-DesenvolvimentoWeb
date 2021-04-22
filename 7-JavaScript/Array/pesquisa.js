let lista_frutas = Aray()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maça'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

var auxiliar = lista_frutas.indexOf('Banana')

if(auxiliar === -1){
    console.log('Elemento não existe')
}else {
    console.log('Elemento não existe e está na posição' + auxiliar)
}