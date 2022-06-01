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
    valor: 'r$ 99',
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
let somaDescriçao = 0
transacoes.forEach((item,index)=>{
if(transacoes[index].descricao.toUpperCase().slice(0,3) === 'TAX'){
  somaTaxa += +transacoes[index].valor.replace('R$','').trim()
}else{
  somaDescriçao+= +transacoes[index].valor.toUpperCase().replace('R$','').trim()
}
})
console.log(somaTaxa)
console.log(somaDescriçao)





// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';')
console.log(arrayTransportes)

// Substitua todos os span's por a's
const html = 
`<ul>
  <li><span>Sobre</span></li>
  <li><span>Produtos</span></li>
  <li><span>Contato</span></li>
</ul>`
console.log(html.split('span').join('a'))



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


