function tabuada(){
    let n=document.getElementById('num').valueAsNumber
    let res=document.getElementById('res')
    let tb=document.getElementById('tb')
    /*alert(typeof n)*/
    
    res.innerText=''
    
    for(let c=1;c<=10;c++){
        let mult =n*c
        res.innerHTML+=`${n} X ${c} = ${mult}<br>`

    }
    
    
}