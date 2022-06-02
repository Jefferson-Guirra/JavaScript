//SETTIMEOUT()
//setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono que ativa o callback após tempo. Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.

function nome (nome){
  return console.log(nome)
}

setTimeout(nome,5000,'jefferson')

//LOOPS E SETTIMEOUT
//Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api praticamente no mesmo //tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.

for (let c =0 ; c<=10; c++){
  setTimeout(()=>{
    console.log(c)
  },1000)
}


//CORRIGINDO O LOOP
//Agora ele está multiplicando o tempo por i. Assim o primeiro aparecerá em 0ms, o segundo em 300ms, o terceiro em 600ms e assim em diante.

for(let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300 * i);
}



const nomes = ['mirela','jefferson','jeniffer']
for (let c = 0 ;c<nomes.length;c++){
  setTimeout(()=>{
    console.log(nomes[c])
  },2000*c)
}

//THIS E WINDOW
//setTimeout é um método do objeto Window. O valor de this dentro do mesmo callback é uma referência ao seu objeto no caso Window.

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event) {
  setTimeout(function() {
    this.classList.add('active');
  }, 1000)
}
// Erro pois window.classList não existe
//ARROW FUNCTION
//Quando utilizamos uma Arrow Function como callback, o contexto de this passa a ser do local onde o setTimeout foi iniciado.

const btn1 = document.querySelector('button');
btn1.addEventListener('click', handleClick);

// this agora é btn.
function handleClick(event) {
  setTimeout(() => {
    this.classList.add('active');
  }, 1000)
}

//SETINTERVAL
//setInterval(callback, tempo, arg1, arg2, ...), irá ativar o callback toda vez que a quantidade de tempo passar.
function loop(tempo){
  return console.log(tempo)
}
setInterval(loop,1000,'passou 1s')

let ii =0 
setInterval(()=>{
  console.log(ii++)
},3000)

//CLEARINTERVAL
//clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.

const clear = setInterval(pausar , 300)
let i=0
function pausar(){
  console.log(i++)
  if(i>10){
    clearInterval(clear)
  }
}