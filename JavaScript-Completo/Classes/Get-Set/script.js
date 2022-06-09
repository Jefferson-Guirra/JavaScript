const button ={
  get element(){
    return this.elemento
  },
  set element(text){
    this.elemento = document.createElement(text)

  }
}

button.element = 'div'
console.log(button.element)

const frutas ={
  lista:[],
  get novaFruta(){
    return this.lista
  },
  set novaFruta(fruit){
    this.lista.push(fruit)
    return this.lista

  }
}

class Button{
  constructor(text,backgroud){
    this.text = text
    this.background = backgroud
  }
  get element(){
    const type = this.elemento || 'button'
    const button = document.createElement(type)
    button.style.backgroundColor = this.background
    button.innerText = this.text

    return button
    
  }

  set element(dado){
    return this.elemento = dado
  }


  

}

const newButton = new Button('botao','black')