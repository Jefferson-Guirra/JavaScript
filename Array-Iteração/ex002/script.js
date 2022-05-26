// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maior = numeros.filter(valor=>valor >100)
console.log(maior)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const bateria = instrumentos.some((instrumento)=>{
  return instrumento === 'Bateria'
})
console.log(bateria)

const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
let soma = 0
comprasTot = compras.map((item,index)=>{
  return soma += +item.preco.replace('R$','').trim().replace(',','.')

})
console.log(soma)




const numeros1 = [6, 43, 22, 88, 101, 29]

const maiorque3 = numeros1.every(n=>n>3)
console.log(maiorque3)

const posiçao = numeros1.find(num => num >=90)
console.log(posiçao)

const numeros3 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros3.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

maiorValor; // 60
