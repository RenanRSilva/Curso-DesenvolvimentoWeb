class Tv{
    constructor(){
        this._relacaoCanais = Array(2, 4, 5, 7, 10)
        this._canalAtivo = 5
        this._volume = 5
    }
//getters setter = recuperar e setar atributos privados
get canalAtivo() {
    return this._canalAtivo
 }
 set canalAtivo(canal){
    //
     if (this._relacaoCanais.indexOf(canal) !== -1) {//indexOf retorna o indice do array ou -1 se o valor não for encontrado
        this._canalAtivo = canal
    } 
 }
}

let tv =  new Tv()

tv.canalAtivo =  4
console.log(tv._canalAtivo)