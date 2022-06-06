const controles = document.querySelector('#controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')


const handleStyle ={
  element:btn,
  texto(value){
    this.element.innerHTML = value 
  },
  backgroundColor(value){
    this.element.style.backgroundColor = value
  },
  height(value){
    this.element.style.height = value + 'px'
  },
  width(value){
    this.element.style.width = value + 'px'
  },
  color(value){
    this.element.style.color = value  
  },
  border(value){
    this.element.style.border = value 
  },
  borderRadius(value){
    this.element.style.borderRadius = value + 'px'
  },
  fontSize(value){
    this.element.style.fontSize = value + "rem"
  },
  fontFamily(value){
    this.element.style.fontFamily = value
  },
  

 
}

function handleChanges(event){
 const name = event.target.name
 const value = event.target.value
 handleStyle[name](value)
  showCss()
}

function showCss(){
  
  cssText.innerHTML ='<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}
controles.addEventListener('change',handleChanges)