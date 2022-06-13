const buttons = document.querySelectorAll('button')
const arrrayBtn = [...buttons]
//console.log(arrrayBtn)
const numeros=[1,2,5,4,858,36,54,78]
const max = Math.max(...numeros)

function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color
  document.body.appendChild(buttonElement)
  return buttonElement;
} 

const redButton = createButton();

const frutas = ['Banana', 'Uva', 'Morango']
const comidas = ['Pizza', 'Batata']

comidas.push(...frutas)
console.log(comidas)