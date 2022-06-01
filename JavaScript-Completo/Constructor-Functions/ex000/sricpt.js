/*function Carro(){
  this.marca ='fiat',
  this.ano = 1998
}

const honda = new Carro()
honda.marca = 'honda',
honda.ano = 2002

console.log(Carro)
console.log(honda)*/

function Carro(marcaAtribuida,preçoAtribuido){
  this.marca = marcaAtribuida
  this.preco = preçoAtribuido
}

const honda = new Carro('honda',22000)
console.log(honda)
