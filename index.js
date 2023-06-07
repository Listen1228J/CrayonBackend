const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
let control_1 = false
let control_2 = false
let control_3 = false
let control_4 = false

app.use(cors())

app.get('/', function (req, res) {
  res.send('<h1>초기화면</h1>' + " " + "<a href='https://www.kmuteam4.store'>원래 주소로 돌아갑니다.</a>")
})

app.get('/control/:id', function (req, res) {
    const q = req.params
    //console.log(q)
    if(q.id=="A") {         //control1 버튼이라면
        control_1 = !control_1
        //res.send(control1)
    } else if (q.id=="B") { //control2 버튼이라면
        control_2 = !control_2
        //res.send(control2)
    } else if (q.id=="C") { //control3 버튼이라면
        control_3 = !control_3
        //res.send(control3)
    } else if (q.id=="D") { //control4 버튼이라면
        control_4 = !control_4
        //res.send(control4)
    } else if (q.id=="GetControl") { //GetControl 이라면: control정보를 원하는거라면
        res.json({
            control1 : control_1,
            control2 : control_2,
            control3 : control_3,
            control4 : control_4,
        })
    }
    
    else {
        res.send("<h1>ERROR</h1>"+ " " + "<a href='https://www.kmuteam4.store'>원래 주소로 돌아갑니다.</a>")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})