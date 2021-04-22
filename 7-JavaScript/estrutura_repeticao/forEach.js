var listaFuncionarios = ['Viviane', 'Rosangela', 'Miguel', 'Lucas', 'Fernanda'] //Para cada um dos elementos do array a função de callback é executada

listaFuncionarios.forEach(function (valor, indice, array) {//A função de callback indica para o forEach como ele tem que atuar em cada um dos indices do Array | Os valores são criados dentro da função forEach e encaminhados para função de callBack
    //Lógica
    console.log('indice' + indice + ' | valor' + valor)

    if(valor == 'Lucas'){
     array[indice] = 'um novo valor'
    }
}) 