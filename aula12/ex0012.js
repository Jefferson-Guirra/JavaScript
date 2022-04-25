var agora= new Date()
var horas=agora.getHours()

if (horas>24 || horas<=5){
    console.log('Boa madrugada')
}

else if (horas<12){
    console.log('bom dia')
}
else if (horas<=18){
    console.log('Boa tarde')
}
else if (horas>=1 && horas<6){
    console.log('Boa madrugada')
}
else{
    console.log('Boa noite')
}