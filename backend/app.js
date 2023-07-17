const express = require('express')
const mongoose = require('mongoose')
const socket = require('socket.io')
const tables=require('./tables.js')

//create express app
const app=express()
// let server=""
// let io=""

//middleware
app.use(express.json())

// connect to db and start server
// mong_URI="mongodb+srv://Lavell119:synxz119@cluster0.19jswsh.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(mong_URI)
//     .then(()=>{
//         console.log('Connected to db')
//         server=app.listen(4444, () => {
//         io=socket(server)
//         io.on('connection', function(socket){
//             console.log('made socket connection')
//         })
//             console.log('listening on port 4444')
//         })
//     }
// )

console.log(tables)
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
    socket.on('join-tablet', (data)=>{
        console.log(data)
        //prepare data 
        let table='table'+data.table
        let player ='player'+data.player
        console.log(table, player)
        tables[table][player]='user'
        console.log(tables)
        socket.emit('join-tablet', tables)
    })
    socket.on('leave-table', (data)=>{
        console.log('player ' + data.player + ' leaving table ' + data.table)
        let table='table'+data.table
        let player ='player'+data.player
        tables[table][player]=null
        console.log(tables)
    })
})
io.on('join-tablet', function(data){
    console.log(data)
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

app.get('/tables', (req,res)=>{
    res.status(200).json(tables)
})

//socket setup

