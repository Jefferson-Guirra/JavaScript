function carregar(){
    var msg=document.getElementById('msg')
    var img=document.getElementById('imagem')
    var date= new Date()
    var horas=date.getHours()
    msg.innerText= `São exatamemte ${horas} horas`
    if (horas>=0 && horas<12){
        msg.innerText+=' da manhã.'
        img.src='imagens/manhã.png'
        document.body.style.background='#abc7ab'

    }
    else if(horas>=12 && horas<18){
        msg.innerText+=' da Tarde.'
        img.src='imagens/tarde.png'
        document.body.style.background='#f4b860'

    }
    else{
        msg.innerText+=' da noite.'
        img.src='imagens/noite.png'
        document.body.style.background='gray'

    }
}
    

