function tabuada(){
    let n=document.getElementById('num').valueAsNumber
    let tab=document.getElementById('tab')
    /*alert(typeof n)*/
    
    tab.innerHTML=''
    for(let c=1;c<=10;c++){
        let item=document.createElement('option')
        item.text=`${n} X ${c} = ${n*c}`
        item.value=`tab{c}`
        tab.appendChild(item)

    }
    
    
}