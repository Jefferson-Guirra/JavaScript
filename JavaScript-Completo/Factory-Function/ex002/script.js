function test (selectorall){
  const buttonList = document.querySelectorAll('button')
  function hide(){
    buttonList.forEach(botao=>{
      botao.style.display ='none'
    })
    return test(selectorall)
  }

  function show(){
    buttonList.forEach(botao=>{
      botao.style.display = 'initial'
    })
    return this
  }

  function addEvent(userEvent,callback){
    buttonList.forEach(botao=>{
      botao.addEventListener(userEvent,callback)
    })
    return test(selectorall)
  }
  return{
    selectorall,
    hide,
    show,
    addEvent,
  }
}

const buttonConfig = test('button')
console.log(buttonConfig.hide().show().addEvent('click',initClick))

function initClick(){
  console.log('clicou')
}
