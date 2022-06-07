const url = 'https://jsonplaceholder.typicode.com/posts/2';

fetch(url,{
  method:'PUT',
  headers:{
    "Content-Type" :"application/json; charset=utf-8"
  },
  body:'{"tittle":"JavaScript"}'
}).then(r=>r.json())
.then(body=>{
  console.log(body)
})
