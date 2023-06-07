const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
let control1 = false
let control2 = false
let control3 = false
let control4 = false

app.use(cors())

app.get('/', function (req, res) {
  res.send('<h1>초기화면</h1>' + " " + "<a href='https://www.kmuteam4.store'>원래 주소로 돌아갑니다.</a>")
})

app.get('/control/:id', function (req, res) {
    const q = req.params
    console.log(q)
    if(q.id=="A") {         //control1 버튼이라면
        control1 = !control1
        //res.send(control1)
    } else if (q.id=="B") { //control2 버튼이라면
        control2 = !control2
        //res.send(control2)
    } else if (q.id=="C") { //control3 버튼이라면
        control3 = !control3
        //res.send(control3)
    } else if (q.id=="D") { //control4 버튼이라면
        control4 = !control4
        //res.send(control4)
    } else {
        res.send("<h1>ERROR</h1>"+ " " + "<a href='https://www.kmuteam4.store'>원래 주소로 돌아갑니다.</a>")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})