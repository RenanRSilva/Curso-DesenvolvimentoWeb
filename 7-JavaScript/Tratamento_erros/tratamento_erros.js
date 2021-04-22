throw new Error('Houve um erro mas não se preocupe, estamos trabalahndo nisso agora')

//netflix
var video = Array()

video[1] = Array()
video[1]['nome'] = 'FullmetalAlchemist'
video[1]['categoria'] = 'Anime'

function getVideo(video){
try{
    //lógica
    //http
    console.log(video[04]['nome'])
} catch(e){
    tratarErro(erro)
    console.log('Agora sim podemos tratar esse erro')
}finally {
    console.log('Sempre passsa por aqui (try / catch)')
}
function tratarErro(e) {
    //Lógica para registrar o erro no servidor
    console.log(e)
}
}
getVideo(video)

