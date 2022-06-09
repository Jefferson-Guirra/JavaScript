class veiculo{
  constructor(rodas){
    this.rodas = rodas
  }
  acelerar(){
    console.log('O veiculo Acelerou')
  }
}


class Moto extends veiculo{
  constructor(rodas,capacete){
    super(rodas)
    this.capacete = capacete
  }
  enpinou(){
    console.log(`a moto de ${this.rodas} rodas empinou`)
  }
  acelerar(){
    super.acelerar()
    console.log('muito')
    
  }
  condutor(){
    console.log(`${this.capacete} estava de capacete`)
  }
}

const moto = new Moto(1,'sim')
moto.enpinou()
moto.acelerar()
moto.condutor()