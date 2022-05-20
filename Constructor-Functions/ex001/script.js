function Carro (preço,marca){
  const taxa = 1.2
  const preçoFinal = taxa*preço
  this.Preço = preçoFinal
  this.Marca= marca
  
}

const honda = new Carro (22000,'Honda')
console.log(honda)