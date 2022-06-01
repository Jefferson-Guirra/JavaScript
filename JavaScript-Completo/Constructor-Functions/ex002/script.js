/*const Dom = {
  seletor:'li',
  element(){
    return document.querySelector(this.seletor)
  },
  ativo(){
    this.element().classList.add('ativo')
  }

}
Dom.seletor ='ul'
console.log(Dom.ativo())*/

function Dom(seletor) {
  this.element = function(){
    return document.querySelector(seletor)
  }
  this.ativo= function(){
    this.element().classList.add('ativo')
  }

}
const li = new Dom('li')
li.ativo()
