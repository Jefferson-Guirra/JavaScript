function verificar(){
    var data=new Date()
    var ano = data.getFullYear ()
    var fano=document.getElementById('txtano').value
    var res=document.getElementById('res')
    if(fano.length==0 || Number(fano)>ano){
        res.innerHTML='[ERRO] dados inválidos tente novamente'
    }else{
        var fsex=document.getElementsByName('radsex')
        var idade= ano-Number(fano)
        var genero=''
        var img=document.getElementById('foto')
        if (fsex[0].checked){
            genero='Homem'
            if (idade>=0 && idade<10){
        
                img.src='imagens/criança.png'

            }else if (idade<21){
            
                img.src='imagens/jovem.png'
            }else if(idade<50){
            
                img.src='imagens/adulto.png'
            }
            else{
        
                img.src='imagens/velho.png'
            }


        }else if (fsex[1].checked){
            genero='Mulher'
            if (idade>=0 && idade<10){
        
                img.src='imagens/criança-f.png'
                
            }else if (idade<21){
                
                img.src='imagens/jovem-f.png'

            }else if(idade<50){
            
                img.src='imagens/adulto-f.png'
            }else{
        
                img.src='imagens/velho-f.png'
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos: ${genero} com ${idade} anos de idade.`
        
    }



}