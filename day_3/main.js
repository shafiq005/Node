var express = require('express')

var productt = require('./index')

var app = express()

app.use('/product',productt)

app.get('*',(req,res)=>
{
    res.send("Page not found")
})

app.listen(3002)