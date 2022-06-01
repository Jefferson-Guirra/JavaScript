const carros = ['Ford', 'Fiat', 'Honda'];

const newCarros = carros.map((item,index)=>{
  return  'Fabricante- ' +item
})
console.log(newCarros)

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]
const tempAula = aulas.map(tempo=> console.log(tempo.min))
const puxarNomes = tempo => tempo.nome
const aulaNomes = aulas.map(puxarNomes)
console.log(aulaNomes)