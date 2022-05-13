var num =document.getElementById('textn')
var tab = document.getElementById('tb')
var res = document.getElementById('res')
var lista = []
alert(lista)

function adicionar(){
    var n=num.valueAsNumber
    var rep=lista.indexOf(n)
    if(n.length==0){
        alert('Dígite um número')
    }else{
        if(n>=0 && n<=100 && rep==-1){
            
            alert('tudo certo')
            lista.push(n)
            var item=document.createElement('option')
            item.text=`O valor ${n} foi adicionado`
            tab.appendChild(item)
            item.value=`tab${i}`
            lista.push(n)
            i++
            }else{
            alert('Número Inválido ou repetido')
        }
        
    }

}
function fim(){
    if (lista.length==0){
        res.innerHTML='adicione valores acima primeiro'
    }else{
        let soma=0
        for (let c in lista){
            soma+=lista[c]
        }
    res.innerHTML=`Ao todo temos ${lista.length} valores cadastrados`
    res.innerHTML+=`<br>O maior valor informado foi ${Math.max(...lista)}`
    res.innerHTML+=`<br> O menor valor informado foi ${Math.min(...lista)}`
    res.innerHTML+=`<br>Somando todos os valores temos ${soma}`
    res.innerHTML+=`<br> A medía dos valores é ${soma/lista.length}`
    }

    
}














    

   
  





   

    