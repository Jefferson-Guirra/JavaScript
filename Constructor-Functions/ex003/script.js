/*function Junçao(nome){
  this.nome = nome
  this.andar = (nome)=>{
    return console.log(`${this.nome} andou`)
  }
}
const Funçao = new Junçao('jefferson')
Funçao.andar()*/

/*function Dom(seletor){
  this.seletor = seletor
  this.element = function(seletor){
    return document.querySelectorAll(seletor)
  }
  
  
  this.classAdd = function(seletor){
    const selecionar = document.querySelectorAll(seletor)
    selecionar.forEach((item)=>{
      item.classList.add('ativo')
    })
  }
  this.classremove = function(seletor){
    const selecionar = document.querySelectorAll(seletor)
    selecionar.forEach((item)=>{
      item.classList.remove('ativo')
    })
  }

}

const manipular = new Dom ()

manipular.classAdd('li')
manipular.classremove('li')*/

function Dom(seletor){
  const elementList = document.querySelectorAll(seletor)
  this.elements = elementList
  this.addClass = function(classe){
    elementList.forEach((item)=>{
      item.classList.add(classe)
    })
  }
  this.removeClass = function(classe){
    this.elements.forEach((item)=>{
      item.classList.remove(classe)
    })
  }
}

const listaItens = new Dom ('li')
console.log(listaItens.elements)
console.log(listaItens.addClass('ola'))

