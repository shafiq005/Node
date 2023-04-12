var express = require('express')

var productt = require('./product')
var userr = require('./user')

var app = express()

app.use('/product',productt)

app.use('/user',userr)

app.get('*',(req,res)=>
{
    res.send("Page not found")
})

app.listen(3001)