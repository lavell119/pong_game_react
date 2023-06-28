const User = require('./models/userModel')
const express = require('express')
const mongoose = require('mongoose')

const app=express()

app.use(express.json())

mong_URI="mongodb+srv://Lavell119:synxz119@cluster0.19jswsh.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mong_URI)
    .then(()=>{
        app.listen(4444, () => {
            console.log('listening on port 4444')
        })
    }

)


// app.listen(4000, (err)=>{
//     console.log("listening on port 4000")

// })

app.post('/login', (req,res)=>{
    console.log(req.body)
})

app.post('/signup', async function(req,res){
    const {email, password} = req.body
    //add user to database
    try {
        const User = await User.create({email, password})
        res.status(200).json(user)
    }catch(err) {
        res.status(400).send(err)
    }

})





