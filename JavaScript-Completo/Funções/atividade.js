/*function isTrue(valor){
  if(!!valor=== true){
    return console.log('É verdadeiro')
  }else{
    return console.log('É falso')
  }

}
isTrue(NaN)*/

/*function quadradroPerimetro(lado){
  return console.log(lado*4)
}
quadradroPerimetro(5)

function nomeCompleto(nome,sobrenome){
  var nomecompleto=`nome completo: ${nome} ${sobrenome}`
  return console.log(nomecompleto)
}
nomeCompleto('jefferson','guirra de freitas silva')

//Função número Par
function Par(numero){
  if (numero%2===0){
    return console.log('Número informado é par.')
  }else{
    return console.log('Número informado é impar.')
  }
}
Par(5)

//Função tipo de Dado

function Dado(valor){
  var dado = typeof valor
  return console.log(`Dado informado do tipo: ${dado}`)

}
Dado('ola')

function onScroll(){
  return console.log('Jefferson guirra de freitas silva')
}
addEventListener('scroll',onScroll)*/

//Paises para visitar
var totaldepaises = 193;
function precisoVisitar(paisesvisitados){
  var faltavisitar = totaldepaises-paisesvisitados 
  return  console.log(`Faltam visitar ${faltavisitar} países`)
}
function jaVisitei(paisesvisitados){
  return console.log(`já visitei ${paisesvisitados} países do total de ${totaldepaises}. `)
}

precisoVisitar(30)
jaVisitei(30)





