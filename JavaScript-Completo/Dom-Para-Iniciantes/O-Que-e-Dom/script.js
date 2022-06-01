var p = document.querySelector('h1')
p.innerHTML += ' tudo bem?'
p.style.color = 'brown'
p.style.fontFamily = 'arial'
p.style.fontSize = '3rem'
p.style.borderStyle = 'solid'
p.style.borderColor = 'black'
p.style.padding = '5px'
p.style.cursor = 'pointer'
p.style.width ='fit-content'
p.style.margin = 'auto'
p.style.marginTop = '50vh'

p.addEventListener('click',ativa)

function ativa(){
  alert('Como você se chama')
  p.innerHTML += '<input type="text" id="nome">'
  
}
 var url = window.location.href
 var largura = window.innerWidth
 var linguagem = window.navigator.language
 alert(url)
 alert(largura)
 alert (linguagem)