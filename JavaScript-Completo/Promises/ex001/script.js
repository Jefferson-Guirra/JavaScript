/*const promessa = new Promise(function(resolved,reject){
  setTimeout(() => {
    let condição = true
    if (condição){
      resolved('resolvido')
    }else{
      reject(Error('Um erro ocorreu'))
    }
  },2000);
  
  
})

promessa.then(resolução=> resolução)
.then(resolução=>{
  console.log(`${resolução} tudo certo! `)},
reject=>{ 
  console.log( reject)
})
.finally(()=>{
  console.log('terminou')
})*/

const login = new Promise(resolve =>{
  setTimeout(()=>{
    resolve('Usuario cadastrado')
  },1000) 
})


const dados = new Promise (resolve =>{
  resolve('dados carregados')
})

const carregouTudo = Promise.all([login,dados])
carregouTudo.then((resolução)=>{
  console.log(resolução)
})
const first = Promise.race([login,dados])
first.then((resolved)=>{
  console.log(resolved)
})