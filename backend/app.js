const express = require('express')

const app=express()

app.listen(4000, (err)=>{
    console.log("listening on port 4000")
})

app.post('/login', (req,res)=>{

})

app.post('/signup', (req,res)=>{

})