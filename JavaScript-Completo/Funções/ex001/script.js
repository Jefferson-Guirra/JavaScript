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

dom.prototype.ativar.call(li,'ativo')

const arraysLi = document.querySelectorAll('li')
const filtro = Array.prototype.filter.call(arraysLi,(item)=>{
  
  return item.classList.contains('ativo')
})
console.log(filtro)