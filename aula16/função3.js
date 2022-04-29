/*function fat(n){
    let fatorial=1
    for(let c=n;c>1;c--){
        fatorial*=c
    }
    return fatorial
}
console.log(fat(4))*/
function fat (n){
    if (n==1){
        return 1
    }
    else{
        return n*(fat(n-1))
    }
}
console.log(fat(5))