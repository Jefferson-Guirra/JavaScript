//OBJETOS
const cliente1 = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

const {digitais,fisicas,digitais:{livros,videos}} = cliente1.compras
console.log(livros)
console.log(videos)

const cliente = {
  nome: 'Andre',
  compras: 10,
  gmail:'adrezito@gmail.com'
}

const {nome:nomeCliente}= cliente
console.log(nomeCliente)
const {gmail='andrea@gmail.com'} = cliente
console.log(gmail)

//ARRAYS
const frutas =['banana','uva','maça']
const [primeira,segunda,terceira] = frutas
console.log(primeira)

//VARIÁVEIS

const [primeiro,segundo,terceiro] = ['item1','item2','item3']
console.log(segundo)

