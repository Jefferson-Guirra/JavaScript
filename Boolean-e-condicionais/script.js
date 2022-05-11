var possuigraduação= false;
if(possuigraduação){
  console.log('É verdadeiro')
}else{
  console.log('É falso')
}

if ((5-5) && (5+5)){
  console.log('Verdadeiro')
}else{
  console.log('Falso')
}


if ((5-10) && (5+5)){
  console.log('Verdadeiro')
}else{
  console.log('Falso')
}

var cor = 'laranja';
switch (cor){
  case 'azul':
    console.log('sua cor favorita é azul')
    break;
  
  case 'amarela' :
    console.log('sua cor favorita é amarela')
    break;

  default:
    console.log('Não sei sua cor favorita')
    

}

if(('Gato' === 'gato') || (5 > 2)) {
  //retorna o ultimo valor verdadeiro ou primeiro falso
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

console.log(5==='5')