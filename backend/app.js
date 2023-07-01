const express = require('express')
const mongoose = require('mongoose')

//create express app
const app=express()

//middleware
app.use(express.json())

//connect to db and start server
mong_URI="mongodb+srv://Lavell119:synxz119@cluster0.19jswsh.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mong_URI)
    .then(()=>{
        console.log('Connected to db')
        app.listen(4444, () => {
            console.log('listening on port 4444')
        })
    }
)

//controller functions
const { signupUser, loginUser } = require('./controllers/UserController')

//add table
let numOfTables = 0

app.get('/addtable', async(req,res)=>{
    numOfTables = numOfTables +1
    console.log(numOfTables)
    res.json(numOfTables)
    console.log('success')
})

//routes
app.post('/login', loginUser )
    

app.post('/signup', signupUser)




// app.post('/login', async(req,res)=>{
//     const {email, password} = req.body
//     console.log(email, password)
//     //add user to database
//     try {
//         const user = await User.create({email, password})
//         res.status(200).json(user)
//         console.log("user saved")
//     }catch(err) {
//         res.status(400).send(err)
//         console.log(err)
//     }
// })


