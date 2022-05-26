//MODIFICAR A ARRAY ORIGINAL
//O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.

const carros = ['Ford', 'Fiat', 'Honda']

carros.forEach((item,index,array) =>{
  array[index] = 'carro ' + item
})
//É melhor usarmos o map pois o forEach() não retorna nada (undefined)
console.log(carros)
console.log('-------------------------------------------------------------------------')

//[].MAP()
//[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
const newCarros = carros.map((item,index,array)=>{
  return 'Carro '+item
})
console.log(newCarros)

const num = [1,25,41,48,36]
//Usando uma linha apenas não é preciso usar o return, ela ja retorna automaticamente
const dobroNum = num.map(item=> item*2)
console.log(num)
console.log(dobroNum)
console.log('-------------------------------------------------------------------------')

//[].MAP() COM OBJETOS
//Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAula = aulas.map(i => i.min)
const nomeAula = aulas.map(i => i.nome)
console.log(tempoAula)
console.log(nomeAula)

//[].REDUCE()
//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
const Taulas = [10, 25, 30];
const aulasTotal = Taulas.reduce((acc,item)=> acc+item)
console.log(aulasTotal)

console.log('-------------------------------------------------------------------------')

//MAIOR VALOR COM [].REDUCE()
const numeros = [10, 25, 60, 5, 35, 10];
const maiorNumero = numeros.reduce((acc,numero) => numero > acc ? numero:acc,0)
console.log(maiorNumero)

console.log('-------------------------------------------------------------------------')

//PODEMOS RETORNAR OUTROS VALORES
const aulas1 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas1.reduce((acc,item,index) =>{
  acc[index] = item.nome
  return acc
},{})

console.log(listaAulas)

console.log('-------------------------------------------------------------------------')
//[].REDUCERIGHT()
//Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc,item) => acc + ' '+item)

console.log(frutasRight)

//[].SOME()
//[].some(), se pelo menos um return da iteração for truthy, ele retorna true.
const temBanana = frutas.some(item => item==='Banana')

console.log(temBanana)
console.log('-------------------------------------------------------------------------')
//[].EVERY()
//[].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

const frutas1 = ['Banana', 'Pêra', 'Uva',0];
const frutasV = frutas1.every(item =>item)
console.log(frutasV)

console.log('-------------------------------------------------------------------------')

//[].FIND() E [].FINDINDEX()
//[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.
const frutaS = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const frutas4 = frutaS.findIndex(item => item==='Maçã')
console.log(frutas4)

const nums = [6, 43, 22, 88, 101, 29]
const maior60 = nums.find(item => item>60)
console.log(maior60)

//[].FILTER()
//[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
console.log('-------------------------------------------------------------------------')
const listaMaior60 = nums.filter(item => item > 60)
console.log(listaMaior60)

//FILTER EM OBJETOS
const aulaS = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulaMaior15 =aulaS.filter(item => item.min >15)
console.log(aulaMaior15)