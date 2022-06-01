const carro ={
  rodas : 4,
  init(marca){
    this.marca = marca
    return this
  },
  acelerar(){
    return `${this.marca} acelerou ${this.rodas} rodas`
  },
  buzinou(){
    return `${this.marca} buzinou`
  }
}

const honda = Object.create(carro)

console.log(honda.init('honda').acelerar())
console.log(honda.init('Ford').buzinou())