// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maior100= numeros.filter((item)=>{
  return item >100
})
console.log(maior100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const baixo = instrumentos.some(item => item.toUpperCase() ==='BAIXO')
console.log(baixo)

// Retorne o valor total das compras
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
const comprasTot = compras.reduce((acc,valor)=>{
  let preço = +valor.preco.replace(',','.').replace('R$','').trim()
  return acc + preço
},0)
console.log(comprasTot)