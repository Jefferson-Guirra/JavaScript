// verifica se é NaN
console.log(Number.isNaN(NaN))

//Verifica se é inteiro ou não
console.log(Number.isInteger(20))
console.log(Number.isInteger(20.1))

//retorna um numero a partir de uma string

const n1 = '99.7'
console.log(parseInt(n1))
console.log(parseFloat(n1))
console.log(parseInt('100 reais'))

//arredondando Numeros retorna uma string
const numero = 35.38954
console.log(numero.toFixed())
console.log(numero.toFixed(2))
console.log(numero.toFixed(3))

//Retorna uma string a partir de um numero
const numero2 = 27.8
console.log(numero2.toString())
console.log(typeof numero2.toString())

//Formata um numero a partir de uma liguagem
const numero3 = 27.8
console.log(numero3.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}))
console.log(numero3.toLocaleString('en-US',{style:'currency',currency:'USD'}))

//Retorna o valor Positivo
console.log(Math.abs(-5.3))

//Arredondamento para cima e para baixo
console.log(Math.ceil(5.5))
console.log(Math.floor(5.5))

//Arrendonda para p numero inteiro mais proximo
console.log(Math.round(7.3))

//Retornar o maior e menor valor de uma lista
const lista = [3,7,15,57,865,98,1547,12365]
var max = Math.max(...lista)
var min = Math.min(...lista)
console.log(max)
console.log(min)
console.log(Math.max(1,8,9,65,74,856,842))

//Retornando um numero aleatorio
const aleatorio =Math.floor(Math.random()*500)
console.log(aleatorio)

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;
