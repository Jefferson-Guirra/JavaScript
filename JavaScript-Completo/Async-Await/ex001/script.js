/*async function PuuxarDados(){
  const dados = await fetch('dados.json')
  const dadosJson = await dados.json()
  dadosJson.forEach((dado,index)=>{
    document.body.innerHTML += dadosJson[index].nome
  })
}
PuuxarDados()

function dadosPuxar(){
  fetch('dados.json').then(r=>r.json())
  .then(body=>{
    body.forEach((dado,index)=>{
      document.body.innerHTML += body[index].nome
    })
  })
}
dadosPuxar()*/

async function dadosFetch(){
  const promiseDados =  fetch('dados.json')
  const promiseCliente =  fetch('clientes.json')

  const dadosJson = await  (await promiseDados).json()
  const clientesJson = await (await promiseCliente).json()
  console.log(dadosJson,clientesJson)

}
dadosFetch()