function dom(seletor){
  this.element = document.querySelector(seletor)
}

dom.prototype.ativar = function (classe){
  this.element.classList.add(classe)
}
const li ={
  element: document.querySelector('li')
}
/*const ul = new dom('ul')
ul.ativar('ativo')
ul.ativar.call(li,'oi')*/

dom.prototype.ativar.call(li,'oi')