/*//OBJECT.ASSIGN()
//Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);

//OBJECT.DEFINEPROPERTIES()
//Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

const moto = {}
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

moto.rodas = 4;
delete moto.capacete;
moto;
// {rodas: 2}*/

const moto = {
  capacete:true
}

Object.defineProperties (moto,{
  rodas:{
    get () {
      return this._rodas
    },
    set(valor){
      this.rovalor*4
    }
  }
})