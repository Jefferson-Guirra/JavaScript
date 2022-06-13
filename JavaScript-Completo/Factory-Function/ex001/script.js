function createElement(text,elemento){
  function element (){
    const newElement = document.createElement(elemento)
    newElement.innerText = text
    return newElement
  }
  return{
    text :text,
    element:element
  }
}
const button =createElement('criado','div')
console.log(button.element())

/*function test (nome,idade){
  function andou(){
    return console.log('andou')
  }

  function pulou(){
    return console.log('pulou')
  }
  return{
    nome,
    idade,
    andou,
    pulou
  }

}

const teste = test('jefferson',24)
console.log(teste.nome)*/
