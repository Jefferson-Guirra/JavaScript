// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050)


// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
const numerosArray = numeros.split(', ')

const maxNumero = Math.max(...numerosArray)
console.log(maxNumero)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', 'R$ 100,222', 'r$ 230  ', 'R$ 200']
const precosArredondados = []

function limparPrecos (preco){
  preco = +preco.toUpperCase().replace('R$','').trim().replace(',','.')
  preco = +preco.toFixed(2)
  return preco
}
let somaTot = 0
listaPrecos.forEach((preco)=>{
  somaTot += limparPrecos(preco)
})

console.log(limparPrecos(listaPrecos[1]))
console.log(somaTot)
