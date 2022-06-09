
 class Button{
   constructor(text,background){
    this.text = text
    this.background = background
   }
   element(){
     const btn = document.createElement('button')
     btn.innerText = this.text
     btn.style.backgroundColor = this.background
     return btn
   }
   appendChildElement(target){
     const elemento = document.querySelector(target)
     elemento.appendChild(this.element())
   }
   static buttonBlue(text){
     
    
    return new Button(text,'blue',)
   }
   
 }

 /*const buttonRed = new Button('feito','red')
 buttonRed.appendChildElement('body')
 buttonRed.element()*/
 const buttonBlue = Button.buttonBlue('consegui')
 buttonBlue.appendChildElement('body')
 buttonBlue.element()
 
