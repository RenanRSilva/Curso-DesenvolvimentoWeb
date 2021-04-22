let produtoLiteral = {
    descricao: 'Geladeira',
    preco: 1800,
    verDescricao: function(){
        console.log (`${this.descricao} por apenas ${this.preco}`)
    }
}
produtoLiteral.verDescricao()
/*
let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo(){
        console.log(`${this.nome}, ${this.idade}, ${this.sexo}, ${this.profissao}`)
    }
}*/
//Modificando valores
let pessoa = {
    nome: 'José',
    idade: 45
}

console.log(pessoa.nome)

pessoa.nome = 'Fernanda'
pessoa.idade = 32

console.log(pessoa.nome)

pessoa.sexo = 'Feminino'

console.log(pessoa)

pessoa.dizerOi =  () => console.log('Oi')

pessoa.dizerOi()