let p = document.querySelectorAll('p')
p = Array.from(p)
const quantCaracter = p.reduce((acc,item)=>{
  let caracter = +item.innerText.length
  return acc+caracter
},0)

console.log(quantCaracter)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
const Section = document.querySelector('section')
function tags(tag,classe,conteudo){
  const element = document.createElement(tag)
  element.classList.add(classe)
  element.innerText = conteudo
  Section.appendChild(element)
  return console.log(element)
}

tags ('h1','ativa','consegui criar o h1')

const newH1 = tags.bind(null,'h1','ativo')
newH1('novo h1 criado a partir do bind')