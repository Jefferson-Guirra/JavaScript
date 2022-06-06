const mensagem = document.querySelector('textarea')
const botao = document.querySelector('#button')

const dadosForms ={}




botao.addEventListener('click',initFim)

function initFim(){
  const nome = contato.elements.nome.value
  const email = contato.elements.email.value
  const senha = contato.elements.senha.value
  mensagem.innerHTML =`nome: ${nome}\nemail: ${email}\nsenha: ${senha}\n`
  
  
}

function handleKeyUp(event){
  const dado = event.srcElement.id
  const elemento = event.target.value
  const target = event.target
  dadosForms[event.target.name]=event.target.value
  
  document.body.style.backgroundColor = target.value
  mensagem.innerText = `${dado}: ${elemento}`

  if(!target.checkValidity()){
    contato.nome.setCustomValidity('Campo Obrigatorio.')
    contato.email.setCustomValidity('email deve conter @.')
    target.classList.add('invalido')
    
    target.nextElementSibling.innerText=target.validationMessage
  } else if(event.target.checked){
    console.log(event.target.value)
  }
  
  else{
    target.classList.remove('invalido')
  }
 
}

const form = document.querySelector('#contato')
form.addEventListener('change',handleKeyUp)

