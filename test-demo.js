const express = require('express')
const app = express()



app.get('/', function (req, res) {
  res.send('Hello World')
})
//GET  메소드로 /test가 날아오면
// 매개변수로 전달받은 콜백 함수를 호출하겠어 => 서버에 세팅
app.get('/test', function(err,res){
  res.json(a)
})

const a = {
  hi:'2',
  hd:'3'
}

let book = {
  title:'node',
  price:20000,
  description:'asdfasdf'
}

app.get('/products/1', function(err,res){
  res.json(book)
})


app.listen(8888)