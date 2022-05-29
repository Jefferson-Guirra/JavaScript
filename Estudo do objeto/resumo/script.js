/*//OBJECT.ASSIGN()
//Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);

//OBJECT.DEFINEPROPERTIES()
//Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.*/

const functionTest = {
  acelerar(){
    return 'Acelerou'
  },
  buzinou (){
    return 'buzinou'
  },
  nome : 'mirela'
}
const dados ={}
Object.defineProperties(dados,{
  nome : {
    value : 'Jefferson',
    configurable : false, //Não permite a mudança de dados.nome
    writable : true, //permite a escrita de dados.nome
  },
  idade :{
    value : 19,
    configurable : false,
    writable : false
  }
  
})
Object.assign(dados,functionTest)
//dados.nome = 'mirela'
console.log(dados.nome)

console.log('-----------------------------------------------------------------')
//GET E SET
//É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.
const numeros = {
  num1:5
}
Object.defineProperties(numeros,{
  num1:{
    
    get(){
      return this.num2
    },
    set (valor){
      this.num2 = valor*4
    }
  }
})

numeros.num1=3

console.log(numeros.num1)

//OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
//Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.
console.log(Object.getOwnPropertyDescriptors(dados,'nome'))
console.log('-----------------------------------------------------------------')
//OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)
//Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.

//Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

console.log(Object.keys(numeros))
console.log(Object.values(numeros))
console.log(Object.entries(numeros))

//OBJECT.GETOWNPROPERTYNAMES(OBJ)
//Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

console.log(Object.getOwnPropertyNames(numeros))

console.log('-----------------------------------------------------------------')

//OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
//Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas)
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false

//OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
//Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.

const marca = {
  marca:'Adidas',
  ano:2022
}
Object.freeze(marca)
Object.preventExtensions(marca)
marca.criaçao = 'junho'
console.log(marca)

Object.freeze(marca)
marca.ano =2024
console.log(marca)

Object.seal(marca)
delete(marca.ano)
console.log(marca)



//PROPRIEDADES E MÉTODOS DO PROTÓTIPO
//Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.

const frutas3 = ['Banana', 'Uva'];
frutas.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String

console.log('-----------------------------------------------------------------')

//{}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
//Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.

const frutas4 = ['Banana', 'Uva'];

frutas.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

console.log('-----------------------------------------------------------------')

//{}.ISPROTOTYPEOF(VALOR)
//Verifica se é o protótipo do valor passado.

const frutas5 = ['Banana', 'Uva'];

Array.prototype.isPrototypeOf(frutas); // true

//{}.TOSTRING()
//Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

const frutas6 = ['Banana', 'Uva'];
frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); // [object Array]

const frase2 = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); // [object String]

const carro = {marca: 'Ford'};
carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]