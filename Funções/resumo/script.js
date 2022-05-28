//PROPRIEDADES
//Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função.
function soma(n1,n2){
  return n1+n2
}

console.log(soma.length)
console.log(soma.name)
console.log('-------------------------------------------------------------------------------')
//FUNCTION.CALL()
//function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.
const nome ={
  nome: 'mirela',
  sobrenome: 'tamires',
  idade: 19
}
function açao(){
  return console.log(`Nome completo: ${this.nome} ${this.sobrenome} idade: ${this.idade} anos.`)
}
açao.call(nome)

console.log('-------------------------------------------------------------------------------')

const frutas = ['Uva', 'Maçã', 'Banana'];
Array.prototype.pop.call(frutas)
console.log(frutas)

console.log('-------------------------------------------------------------------------------')

//FUNCTION.APPLY()
//O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

const numeros = [3,4,6,1,34,44,32];
console.log(Math.max.apply(null, numeros))
Math.max.call((null, 3, 4, 5, 6, 7, 20))
console.log(Math.max(...numeros))
// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

//APPLY VS CALL
//A única diferença é a array como segundo argumento.

/*const li = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
  return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);*/

console.log('-------------------------------------------------------------------------------')

const Carro = {
  marca: 'Honda',
  ano: 2018,
  acelerar: function(velocidade , tempo){
    console.log(`${this.marca} acelerou ${velocidade} em ${tempo}`)
  }
}

Carro.acelerar(100,30)

const caminhao ={
  marca:'Volvo'
}


const Carro2 = Carro.acelerar.bind(caminhao)
Carro2(300,15)

//FUNCTION.BIND()
//Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função /mas sim retornar a mesma com o novo contexto de this.

/*const li = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
  return item.classList.contains('ativo');
});

filtrarLi();*/

//ARGUMENTOS COMUNS
//Podemos passar argumentos padrões para uma função e retornar uma nova função.

function imc(peso,altura){
  return peso / (altura*altura)
}
console.log(Math.floor(imc(70,1.85)))

const imc2 = imc.bind(null,75)
console.log(imc2(1.85))