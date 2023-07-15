const express = require('express')
const mongoose = require('mongoose')
const socket = require('socket.io')

//create express app
const app=express()
// let server=""
// let io=""

//middleware
app.use(express.json())

//connect to db and start server
mong_URI="mongodb+srv://Lavell119:synxz119@cluster0.19jswsh.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mong_URI)
    .then(()=>{
        console.log('Connected to db')
    //     server=app.listen(4444, () => {
    //     io=socket(server)
    //     io.on('connection', function(socket){
    //         console.log('made socket connection')
    //     })
    //         console.log('listening on port 4444')
    //     })
    }
)

const server=app.listen(4444, ()=>{
    console.log("server listening on port 4444")
})

io=socket(server, {cors: {
    //why it wasnt working
    origin: '*'
}
})
io.on('connection', function(socket){
    console.log('made socket connection', socket.id)
    socket.emit('table-joined')
    
})

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

//socket setup

