function contador(){
    var inicio= document.getElementById('inicio').value
    
    var fim=document.querySelector('input#fim').value
    
    var passo=document.getElementById('passo').value
    
    var res=document.getElementById('res')

    /* Validações
    alert(typeof passo)
    res.innerText=` ${inicio}  ${fim}   ${passo}`*/
    if(inicio.length==0||fim.length==0||passo.length==0){
        res.innerText='[ERRO] Faltam dados'

    }
    else{
        res.innerText='Contando:'
        var i=Number(inicio)
        var f=Number(fim)
        var p=Number(passo)
        if(i>f || p>f){
            res.innerText='Dados Inválidos.'
        }else {
            for(var c=i;c<=f;c+=p){
            res.innerText+=` ${c} \u{1F4A5}`            
            }
        }
    

    }
    res.innerText+=`\u{1F6D1}`
}