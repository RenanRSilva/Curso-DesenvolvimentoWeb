let Carro = function () {
    this.cor = 'Amarelo'
    this.modelo = 'Chevete'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function () {
        let velocidade = this.getVelocidadeAtual() + 10
        if (velocidade > this.velocidadeMaxima) {
            velocidade = this.velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
    }


    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual
    }
    this.setVelocidadeAtual = function (velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro()

console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)


let Carro2 = function () {
    var velocidadeMaxima = 180
    var quilometrosRodados = 0

    this.cor = 'Amarelo'
    this.modelo = 'Chevete'
    this.velocidadeAtual = 0
    

    this.acelerar = function () {
        let velocidade = this.getVelocidadeAtual() + 10
        if (velocidade > this.velocidadeMaxima) {
            velocidade = this.velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
    
        SetquilometrosRodados(0.07)
        console.log(quilometrosRodados)
    }


    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual
    }
    this.setVelocidadeAtual = function (velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }

    var setQuilometrosRodados = function(q){ //Uma função atribuida como valor a uma variavel do escopo da função que atua como atributo privado do objeto
        quilometrosRodados += 0.05
    }
}

let carro2 = new Carro()

console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)