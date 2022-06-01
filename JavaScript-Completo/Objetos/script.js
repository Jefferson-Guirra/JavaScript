var quadrado = {
  lados:4,
  area : function Area(lado){
    return console.log(`Área quadrado: ${lado*lado}m²`)
  },
  perimetro : function Perimetro(lado){
    return console.log(`Perímetro quadrado: ${this.lados*lado}m²`)
  }
}
console.log(`Possui ${quadrado.lados} lados.`)
quadrado.area(5)
quadrado.perimetro(5)

//Números aleatorios
var n = Math.random()
console.log(n)


var dados = {
  nome: 'Jefferson',
  sobrenome: 'Guirra'
}
dados.nomecompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}
console.log(dados.nomecompleto())

var carro = {
  preço: 1000,
  portas:4,
  marca: 'Audi'
}

carro.preço = 3000

for (c in carro){
  console.log(`${c}: ${carro[c]}`)
}

var cachorro = {
  raça:'Labrador.',
  cor:'Preto.',
  idade:'10 Anos.',
  latir(pessoa){
    if(pessoa.toLowerCase() ==='homem'){
      return 'latir'

    }else{
      return 'não late'
    }
  }
}
console.log(cachorro.latir('MULHER'))

