function Pessoa (nome,sobrenome,idade){
  this.nome = nome
  this.sobrenome= sobrenome
  this.idade = idade
}

Pessoa.prototype.nomeCompleto = function(){
 return `${this.nome} ${this.sobrenome} ${this.idade}`
}


const marcia = new Pessoa('Marcia','Fragoso',22)

console.log(marcia.nomeCompleto())


//Acensando a lista de metodos da nodeList e da Htmlcollection
/*Object.getOwnPropertyNames(NodeList)

Object.getOwnPropertyNames(HTMLCollection)

const li = document.querySelector('li')
console.log(li)*/
