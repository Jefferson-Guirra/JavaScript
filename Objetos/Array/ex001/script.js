const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];
console.log(dados[1][2].cor)

const Carros = new Array ('mustang','corola','honda-civic','ferrari')
Carros[1]='fusca'
console.log(Carros)

const nomes = {
  0: 'guto',
  1: 'guga',
  2: 'lucas',
  length:3,
}
const nomesArray = Array.from(nomes)
console.log(nomesArray)

//Verifica se é uma array
console.log(Array.isArray(nomesArray))

console.log('----------------------------------------------------------')
//criando arrays
console.log(Array.of(10,11,14))
console.log(Array(5))
console.log(Array(1,2,3,4))
console.log(new Array(5))

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas[2].length)
console.log('----------------------------------------------------------')
//ordem alfabetica
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort()
console.log(instrumentos)
console.log('----------------------------------------------------------')
//ordem Númerica de caracter a caracter
const idades = [32,21,33,43,1,12,8];
idades.sort()
console.log(idades)
console.log('----------------------------------------------------------')
//Adicionando elementos no inicio da array e ao final
const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift('Ferrari')
carros2.push('VV')
console.log(carros2)

//[].SHIFT() E [].POP()
//[].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.
console.log('----------------------------------------------------------')
const carros3 = ['Ford', 'Fiat', 'VW'];
console.log(carros3.shift())
console.log(carros3.pop())
console.log(carros3)

//[].REVERSE()
//[].reverse() inverte os itens da array e retorna a nova array.
const array1 =['Mirela','Jefferson','Jeniffer']
console.log(array1.reverse())
console.log('----------------------------------------------------------')

//[].SPLICE()
//[].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
const pais = ['Brasil','Uruguai','Argentina','Paraguai']
pais.splice(1,0,'China','Alemanha','Inglaterra')
console.log(pais)
console.log('----------------------------------------------------------')

//[].COPYWITHIN()
//[].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.
const numeros1 = [1,7,8,9,11,54,76]
const numerosCopia = numeros1.copyWithin(0,2,2)
numeros1.shift
console.log(numerosCopia)

//MÉTODOS DE ACESSO [].CONCAT()
//Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];


//[].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
//[].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5

//[].JOIN()
//[].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens2.join(); // 'html,css,js,php,python'
linguagens2.join(' '); // 'html css js php python'
linguagens2.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>
COPIAR
//[].SLICE()
//[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

const linguagens1 = ['html', 'css', 'js', 'php', 'python'];
linguagens1.slice(3); // ['php', 'python']
linguagens1.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();

