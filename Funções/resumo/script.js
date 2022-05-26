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
