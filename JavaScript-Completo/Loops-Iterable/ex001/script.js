// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window


const lis =document.querySelectorAll('li')

for (const c of lis){
  c.classList.add('ativo')
}


for (w in window){
  console.log(`${w}: ${window[w]}`)
}

