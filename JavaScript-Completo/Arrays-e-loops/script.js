var videogames = ['ps4','xbox','ps1']
console.log(videogames.pop())

//contar de um a 10

for (let c = 0 ;c <= 10;c++){
  console.log(c)
}
var c = 0
while (c<=10){
  console.log(c)
  c++

}
var nome = ['mirela','jefferson','elaine']
nome.forEach(function(item,index){
  console.log(index,item)
})

for (let i = 0;i<nome.length;i++){
  console.log(nome[i])
  if (nome[i]==='jefferson'){
    break
  }
}
console.log('jefferson'.length)
var numero = 0
var maximo= 25
for (;numero<=maximo;){
  console.log(numero)
  numero++
}

//Array Brasil copa

var Brasil=[1959,1962,1970,1994,2002]

for (let i =0;i < Brasil.length;i++){
  console.log(Brasil[i])
}

Brasil.forEach(function(item,index){
  console.log(`${1+index}- O Brasil ganhou a copa de ${item}`)
})

var frutas = ['maça','uva','goiaba','laranja','tangerina']

for (let i = 0;i<=frutas.length;i++){
  console.log(frutas[i])
  if(frutas[i]==='laranja'){
    break
  }
}

var fruta = frutas[frutas.length-1]
console.log(fruta)