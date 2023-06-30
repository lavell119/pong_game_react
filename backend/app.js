const User = require('./models/userModel')
const express = require('express')
const mongoose = require('mongoose')

const app=express()

app.use(express.json())

mong_URI="mongodb+srv://Lavell119:synxz119@cluster0.19jswsh.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mong_URI)
    .then(()=>{
        console.log('Connected to db')
        app.listen(4444, () => {
            console.log('listening on port 4444')
        })
    }

)




// app.listen(4000, (err)=>{
//     console.log("listening on port 4000")

// })

let numOfTables = 0

app.get('/addtable', async(req,res)=>{
    numOfTables = numOfTables +1
    console.log(numOfTables)
    res.json(numOfTables)
    console.log('success')
})


app.post('/login', async(req,res)=>{
    const {email, password} = req.body
    console.log(email, password)
    //add user to database
    try {
        const user = await User.create({email, password})
        res.status(200).json(user)
        console.log("user saved")
    }catch(err) {
        res.status(400).send(err)
        console.log(err)
    }
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
    console.log('user saved to db')
})





