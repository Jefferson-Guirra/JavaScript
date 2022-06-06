const doc =fetch('https://viacep.com.br/ws/01001000/json//')
const conteudo = document.querySelector('.conteudo')
doc.then((resolved)=>{
  
  return resolved.json()
}).then((texto)=>{
  conteudo.innerHTML = texto.logradouro
})

