class Animal{
   constructor(){
       this.cor = ''
       this.tamanho = null
       this.peso = null
   } 
   dormir(){
       console.log('dormir')
   }
}

class Cachorro extends Animal{ //Crie um objeto baseado na classe cachorro que extende a classe animal
    constructor(){
        super()
        this.orelhas = 'grandes e caidas'
    }
    correr(){
        console.log('Correr')        
    }
    rosnar(){
        console.log('Rosnar')
    }
}

class Passaro extends Animal{
    constructor(){
        super() //Sempre antes do this
        this.bico = 'Curto'
    }
    voar(){
        console.log('voar')
    }
}
class Papagaio extends Passaro{ //Recebe atributos e metodos de passaro e animal
    constructor(){
        super()
        this.sabeFalar = true
    }
    falar(){
        console.log('Falar')
    }
}


let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

cachorro.dormir()
passaro.dormir()
papagaio.falar()
papagaio.dormir()