//1 atividade Somando itens de uma array
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let somaTaxa = 0
let somaRecebimento = 0
transacoes.forEach((item,index)=>{
  
  if(item.descricao.includes('Taxa')){
    const listaNum=transacoes[index].valor.slice(2)
    somaTaxa += +listaNum
  }else{
    const listaRe = transacoes[index].valor.slice(2)
    somaRecebimento += +listaRe
  }
})
console.log(`A soma das taxas é R$${somaTaxa},00`)
console.log(`A soma dos recebimentos é R$${somaRecebimento},00`)
console.log(`A soma total é R$${somaRecebimento+somaTaxa},00`)




// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';')
console.log(arrayTransportes)
// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
/*const novoHtml = html.replace(/span+/g,'a')
console.log(novoHtml)*/
const removeSpan = html.split('span')
const novoHtml = removeSpan.join('a')

console.log(novoHtml)


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length-1])

// Retorne o total de taxas
let transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let somaTaxa1 = 0
transacoes1.forEach((item)=>{
  if(item.toLowerCase().includes('taxa')){
    somaTaxa1+=1
  }

})
console.log(`A palavra taxa aparece ${somaTaxa} vezes.`)

