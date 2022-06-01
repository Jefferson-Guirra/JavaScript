for (let i = 0 ;i <= 20;i++ ){
  console.log(i)
}
var i = 50
console.log(i*10)

const mes = 'fevereiro'
console.log(mes)

mes = 'dezembro'
console.log(mes)//por ser uma constante

const data = {nome:'jefferson',idade:21}
data.idade = 23

const data = []//Erro pois data já foi declarado como objeto e é uma constatnte.
console.log(data)

const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4))
console.log(dividirDois(6))


const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

