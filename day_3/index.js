var express = require('express')

var router = express.Router()

router.use((req,res,next)=>
{
    req.headers['content-type'] = "text/plain"
    console.log("api started")
    res.write("the ")
    next()
})

router.get('/',(req,res,next)=>{
    console.log("get request")
    res.write("Product page")
    if(req.headers['content-type'] === "text/plain")
    {
        next()
    }
    else{
        res.end()
    }
})

function fn1(req,res,next)
{
    console.log("third middleware")
    next()
}

function fn2 (req,res,next)
{
    console.log("third get")
    res.write("get page 1")
    res.end()
}

router.get('/get' , (req,res,next)=>
{
    console.log("second middleware")
} 
, (req,res) => {
    console.log("second get")
    res.send("get page")
})

router.get('/get1' , fn1, fn2 )

router.use((req,res)=>
{
    res.write(" is opened")
    console.log("completed")
    res.end()
})

module.exports = router