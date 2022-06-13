function creatElement(texto,construtor){
  
  function element(){
    const elemento = document.createElement(construtor)
    elemento.innerText = texto
    return elemento
  }
  return{
    texto,
    element
  }
}

const newElement = creatElement('criando uma div','div')
console.log(newElement)
