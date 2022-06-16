const cpfsList = document.querySelectorAll('.cpf li')


const cpfList = document.querySelectorAll('.cpf li')

function elementsInnerText([...args]){
  const elementArray = args.map(item=>item.innerText)
  return elementArray
}


const limparCpf= (cpfs)=>{
  return cpfs.replace(/\D/g,'')
}


const construirCpf = (cpf)=>{
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,'$1.$2.$3-$4')
}

const formatarCpf = (cpfElement)=>{
 const cpfFormatado = resultado.map(limparCpf).map(construirCpf)
 return cpfFormatado
}

const substituirCpf = (arrayCpf)=>{
 cpfList.forEach((item,index)=>{
  item.innerText = arrayCpf[index]
 })

}

const resultado = elementsInnerText(cpfList)
const cpfFormatado = formatarCpf(resultado)
substituirCpf(cpfFormatado)
