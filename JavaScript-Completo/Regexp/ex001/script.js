/*let nome = 'guirra, Jefferson'
const regexp = /(\w+)(,)(\s)(\w+)/gi
nome = nome.replace(regexp,'$4$2$3$1')
console.log(nome)*/

/*const regexp = /\d{5}[\s-]?\d{3}/g
const ceps = [
  '00000-000',
  '00000 000',
  '00000000'
];*/


/*for( const c of ceps){
  console.log(c,c.match(regexp))
}


console.log(regexp.source)*/


/*const frase = 'JavaScript, TypeScript Java CoffeeScript'
const regeXp =/\w+/gi


//let resultRexep
let resultRexep = regeXp.exec(frase)
while(resultRexep){
  console.log(resultRexep)
  resultRexep = regeXp.exec(frase)
}
while((resultRexep=regeXp.exec(frase))!==null){
  console.log(resultRexep)

}

const regexp = /Script/g;
const frase = 'JavaScript, TypeScript Java CoffeeScript';
let i =0
while(regexp.test(frase)){
  console.log(i++, regexp.lastIndex)

}


//const regexp = /\w{2,}/g
const frase = 'JavaScript, TypeScript e CoffeeScript';
//console.log(frase.match(regexp))
console.log(frase.split(/script/gi))

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`
const regeXp = /(?<=<\/?)\w+/g
console.log(tags.split(regeXp).join('div'))*/
const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`
const regexp = /(\w+@)([\w.]+)/gi

//console.log(emails.replace(regexp,'$1gmail.com'))
const resultado = emails.replace(regexp,function(...args){
  if(args[2]==='homail.com.br'){
    return `${args[1]}hotmail.com`
  }
  if(args[2]==='ggmail.com.br'){
    return `${args[1]}gmail.com`
    
  }
  if(args[2]==='oulook.com.br'){
    return `${args[1]}outlook.com`
    
  }

})
console.log(resultado)













