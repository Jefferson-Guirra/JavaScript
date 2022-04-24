var idade=68
/*if (idade>18 && idade<=67){
    console.log('Voto obrigatorio')
}
else {
    if(idade>=16 && idade<18){
        console.log('voto opcional')

    }
    if (idade>67){
        console.log('voto opcional')

    }
    
    else{
        console.log('não vota')
    }

}*/
var idade=19
console.log(`Você tem ${idade} anos de idade.`)
if (idade<16){
    console.log('não vota')
}
else if(idade<18|| idade>67){
    console.log('opcional')
}
else{
    console.log('voto obrigatorio')
}