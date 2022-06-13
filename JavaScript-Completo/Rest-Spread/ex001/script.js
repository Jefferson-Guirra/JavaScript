/*function perimetroForma(lado, totalLados=2,...ListaArgumentos) {
  console.log(arguments)
  console.log(ListaArgumentos)
  return lado * totalLados;
}

(perimetroForma(10, 4,5,'oi','jeff')) // 40
//console.log(perimetroForma(10))

function anunciarGanhadores(premio,...ganhadores){
  ganhadores.forEach(resultado=>{
    console.log(`${resultado} ganhou uma ${premio}.`)
  })

}

anunciarGanhadores('moto','maria','lucia','marcos','mirela')*/


//SPREAD
const frutas = ['uva','banan','laranja']
const legumes = ['cebola','alho']
const comidas = [...frutas,'manjericão',...legumes]
console.log(comidas)