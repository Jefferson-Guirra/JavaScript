//Aumentar uma string
const preco = 'R$ 99,00'

console.log(preco.padStart(20,'.'))
console.log(preco.padEnd(20,'.'))

//Pesquisando na string
const fruta = 'banana'
console.log(fruta.indexOf('a'))
console.log(fruta.lastIndexOf('a'))

//exibir letra na posição
console.log(fruta[0])
console.log(fruta.charAt(5))

//começa com e termina com
console.log(fruta.startsWith('bu'))
console.log(fruta.endsWith('na'))

//fatiando string ou array

const listaFrutas = 'banana,maça,goiaba'
console.log(listaFrutas.slice(0,15))
console.log(listaFrutas.slice(0,15))

//esta na lista?
console.log(listaFrutas.includes(fruta))
console.log(fruta.includes(listaFrutas))

//concatenar
const frase ='A melhor linguagem é '
const linguagem = 'JavaScript'
//const fraseFinal = frase + linguagem
const fraseFinal = frase.concat(linguagem,' !!','.')
console.log(fraseFinal)

const listaPreco = ['99.00','100.00','300.00']
listaPreco.forEach((item)=>{
  console.log(item.padStart(20,'.'))
})

//Repetidor string
const frase3 = 'lu '
console.log(frase3.repeat(10))

//Mudar string (estudar regular Expression) Podemos usar uma regular expression para mudar mais de um valor
let listaRoupa = 'bone camisa bermuda luva vestido calça sapato'
listaRoupa =listaRoupa.replace(/[ ]+/g,', ')
console.log(listaRoupa)

let fruta1 = 'goiaba'
fruta1 = fruta1.replace('go','lu')
console.log(fruta1)

//Usando o slipt(divide a string de acordo com o padrão passado e retorna uma array)
listaRoupa = listaRoupa.split(', ')
console.log(listaRoupa)

//Separando array

const htmlText = '<div> o melhor item</div><div>A mlehor lista</div>'
const arrayHtml = htmlText.split('div')
console.log(arrayHtml)
//Juntando
const novoHtml = arrayHtml.join('article')
console.log(novoHtml)

//Removendo espaços de uma string
let valor = '    23.00   '
valor = valor.trim()

console.log(valor)

