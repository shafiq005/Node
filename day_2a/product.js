var express = require('express')

var router = express.Router()

router.get('/get',(req,res)=>
{
    res.send("Product get")
})

router.post('/post',(req,res)=>
{
    res.send("Product post")
})
router.put('/put',(req,res)=>
{
    res.send("product put")
})
router.delete('/delete',(req,res)=>
{
    res.send("Product delete")
})

router.get('/get/:id)',(req,res)=>
{
    res.send("Product get " + req.params.id)
})

// router.get('/get/:id([0-9])',(req,res)=>
// {
//     res.send("Product get" + req.params.id)
// })

// router.get('/get/:id([0-9]{4})',(req,res)=>
// {
//     res.send("Product get" + req.params.id)
// })

// router.get('/get/:name([a-z]{8})',(req,res)=>
// {
//     res.send("Product get" + req.params.name)
// })


// router.get('/get/:id/:name',(req,res)=>
// {
//     res.send("Product get" + req.params.id + req.params.name)
// })

module.exports = router