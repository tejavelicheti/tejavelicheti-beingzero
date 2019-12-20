const express = require('express')
const app = express()
const port = 3000

app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
//res.sendfile
//res.json
//res.json
var student={}
student.name = "Being Zero"
student.college="VNRVJIET"
student.regno="112323232"

app.get('/data',(req,res) => res.json(student))
app.get('/login', (req, res) => res.send('Login'))
app.get('/register', (req, res) => res.send('Register'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))