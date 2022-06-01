const cursos = document.querySelectorAll('.curso')

const arrayCursos = Array.from(cursos)
console.log(arrayCursos)

const lista = arrayCursos.map((item)=>{
  const titulo = item.querySelector('h1').innerText
  const descriçao = item.querySelector('p').innerText
  const aulas = item.querySelector('.aulas').innerText
  const horas = item.querySelector('.horas').innerText
  return{
    titulo : titulo,
    descriçao : descriçao,
    aulas,
    horas
  }
})
console.log(lista)