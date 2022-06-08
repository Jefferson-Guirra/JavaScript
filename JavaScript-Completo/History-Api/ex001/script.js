const links = document.querySelectorAll('a')
links.forEach(link=>{
  link.addEventListener('click',initPage)
})
function initPage(event){
  event.preventDefault()
  pageFetch(event.target.href)
  window.history.pushState(null,null,event.target.href)
}

async function pageFetch(url){
  const responsive = await fetch(url)
  const pageText = await responsive.text()
  replaceContent(pageText)
}

function replaceContent (newText){
  const newHtml = document.createElement('div')
  newHtml.innerHTML = newText
  
  const oldContent = document.querySelector('.content')
  const newContent = newHtml.querySelector('.content')
  oldContent.innerHTML = newContent.innerHTML
  document.title = newHtml.querySelector('title').innerText

}

window.addEventListener('popstate',()=>{
  pageFetch(window.location)
})