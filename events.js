const EventEmmitter = require('events')
class MeuEmissor extends EventEmmitter{

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:Click'
meuEmissor.on(nomeEvento, function(click) {
  console.log('Clicou!', click)
})
/* meuEmissor.emit(nomeEvento, 'barra de rolagem')
meuEmissor.emit(nomeEvento, 'no ok')

let count =  0 //contador
setInterval(function () {
  meuEmissor.emit(nomeEvento, 'no ok' + count ++)
}, 1000) //tempo de execução */

const stdin = process.openStdin()
function main() {
  return new Promise(function (resolve, reject) {
    stdin.addListener( 'data', function (value) {
      return resolve(value)
    })
  })
} 

main().then(function (resultado) {
  console.log('resultado', resultado.toString())
})














