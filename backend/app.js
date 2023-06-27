const User = require('../models/userModel')
const express = require('express')

const app=express()

mong_URI="mongodb+srv://Lavell119:<password>@cluster0.19jswsh.mongodb.net/?retryWrites=true&w=majority"

app.listen(4000, (err)=>{
    console.log("listening on port 4000")

})

app.post('/login', (req,res)=>{

})

app.post('/signup', async function(req,res){
    const {email, password} = req.body

    try {
        const User = await User.create({email, password})
        res.status(200).json(user)
    }catch(err) {
        res.status(400).send(err)
    }

})





