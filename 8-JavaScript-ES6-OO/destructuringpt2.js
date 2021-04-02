let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: { //Tem um detalhes
            fabricante: 'abc',
            modelo: undefined
    }
}

//token
//Array => []
//objeto => {}

//let { descricao, preco} = produto


//let { descricao: d, preco: p } = produto //Desestruturando descrição e preço de dentro do produto e atribuindo as variaveis d e p

//let { descricao: d, preco: p, desconto = 5 } = produto

let{ detalhes: { fabricante: f, modelo = 'Não Informado'}} = produto
console.log(f, modelo)

//Composição
//é um
//tem um