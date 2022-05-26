const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const first = comidas.shift()
console.log(first)
const last = comidas.pop()
console.log(last)
comidas.push('arroz')
comidas.unshift('lasanha')
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.sort())
console.log(estudantes.reverse())
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))

let html = `
<section>
<div>Sobre</div>
  <div>Produtos</div>
  <div>Contato</div>
</section>`
// Substitua section por ul e div com li,
// utilizando split e join
const htmlArray = html.split('section').join('ul').split('div').join('li')
console.log(htmlArray)

// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const carroscopy = carros.slice()
carros.pop()
console.log(carroscopy)

