var express = require('express')

var app = express()

var json = {
    name : "jhon",
    age : 25,
    id : 15,
}

// get -- > display
// post -- > create, post
// Put -- > update 
// delete -- > delete



app.get('/', (req,res)=>{
    res.send("Hello world")
})
app.get('/data',(req,res)=>{
    res.send(json)
})


app.get('/get', (req,res)=>{
    res.send("Get request")
})
app.post('/post',(req,res)=>{
    res.send("post request")
})
app.put('/put', (req,res)=>{
    res.send("Put request")
})
app.delete('/delete',(req,res)=>{
    res.send("delete request")
})

app.listen(3000)