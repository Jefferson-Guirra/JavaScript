console.log(document.forms.contato.elements[0])
console.log(document.forms[0].elements[0])
const contato = document.querySelector('#contato')
const concluir = document.querySelector('[data-cadastrar]')
const texto = document.querySelector('textarea')

concluir.addEventListener('click',initFinalizar)
function initFinalizar(){
  const nome = contato.elements[0].value
  const email = contato.elements.email.value
  const senha = contato.elements[2].value
  texto.innerHTML +=` ${nome}`
  texto.innerHTML +=`${email}`
  texto.innerHTML +=`${senha}`
  
  console.log(nome,email,senha)
}
function handleKeyUp(event){
  texto.innerText =   event.target.value
  const target = event.target
  if(!target.checkValidity()){
    console.log(target)
    target.classList.add('invalido')
    target.nextElementSibling.innerText = target.validationMessage
  }
  
  
}

contato.addEventListener('change',handleKeyUp)