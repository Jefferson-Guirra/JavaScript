/*function areatriangulo(base = 0,altura = 0){
  return base*altura
}
var area = areatriangulo(5,2)
console.log(area)

function pi(){
  return 3.14
}

var total= 4 * pi()
console.log(total)


function imc (peso,altura){
  let imc = peso/(altura**2)
  return imc

}

console.log(imc(70,1.80))*/

function terceiraidade(idade){
  if (typeof idade !== 'number'){
    return console.log('Informe um numero')
  }else if(idade>=60){
    return console.log('É idoso')
  }else{
    return console.log('Não é idoso')
  }
}
var idoso = terceiraidade(60)
