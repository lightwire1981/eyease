const express = require('express')
const app = express()
const port = 9090

app.set("view engine", "ejs")

app.use(express.static(__dirname + "/public"))

app.listen(port, ()=>{
    console.log('http://localhost:9090 run on server')
})


app.get('/', (req, res)=>{
    res.render("index.ejs")
})