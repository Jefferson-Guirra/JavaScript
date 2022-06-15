let nome = 'guirra, Jefferson'
const regexp = /(\w+)(,)(\s)(\w+)/gi
nome = nome.replace(regexp,'$4$2$3$1')
console.log(nome)



