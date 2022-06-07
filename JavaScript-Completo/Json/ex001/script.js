const doc = fetch('dados.json')
doc.then(r=>r.text())
.then(body=>{
  const json = JSON.parse(body)
  console.log(json)
})
  


const objTest = {
  nome: 'Jefferson',
  sobrenome: 'Guirra'


}

localStorage.config = JSON.stringify(objTest)
console.log(JSON.parse(localStorage.config))