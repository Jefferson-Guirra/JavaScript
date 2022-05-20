function Dom(nome){
  this.nome = nome
}


Dom.prototype.pular = function(){
  return `${this.nome} pulou`
}

Dom.prototype.andou =function(){
  return `${this.nome} andou`
}


const teste = new Dom('jefferson')

console.log(Dom.prototype.andou())

console.log(teste.pular())
console.log(teste.andou())