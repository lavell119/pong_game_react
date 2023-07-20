import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import io from "socket.io-client"
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"

let socket = io.connect('http://localhost:4444')



export default function Pong_Table() {

  const [player1, setPlayer1] = useState()
  const [player2, setPlayer2] = useState()

  let p1=false
        let p2=false
  const user = useSelector(state => state.pong_user)
  // useEffect(()=>{
  //   setPlayer1(false)
  //   setPlayer2(false)
  //   console.log('players set to false')
  // },[])
    const [tables, setTables] = useState(null)

    //fetch data
    useEffect(()=>{
      
      const fetchServerTables= async() => {
        const response = await fetch("/tables", {
          
        })
        const json=await response.json()
        if(response.ok) {
          
          console.log('response JSON: ',json)
          //set tables to response
          setTables(json)
          //fixed api call by switching tables with json
          let variable = json[reduxTable]
          console.log('v = ', variable)
          setPlayer1(variable.player1)
          setPlayer2(variable.player2)
        }
        if(!response.ok) {
          console.log('fetch error')
        }
      }
      fetchServerTables()

    }, [])


    const dispatch=useDispatch()
    //socket setup
    const { id  } = useParams()
    const reduxTable= 'table' + id
    console.log(reduxTable)
    const numberOfTables = useSelector(state => state.numOfTables)

    const pongTables = useSelector(state => state.pongTables)
    console.log(pongTables.table2.player1)
    console.log(pongTables)

    //join table function
    const joinTable = function(player){
      socket.on('table-joined', ()=>{
        console.log('taergerg')
      })
    }

    //leave table function
    const leaveTable = function(player){
      socket.emit('leave-table', {table: id, player: player})
      console.log('leaving table')

      socket.on('table-joined', ()=>{
        console.log('taergerg')
      })
    }

    

    const joinTable2 = function(player){
      socket = io.connect('http://localhost:4444')
      socket.emit('join-tablet', {table: id, player: player, user: user})
      socket.on('join-tablet', (data)=>{
        console.log(data)
        setTables(data.tables)
        console.log(tables)
        let num = data.playerNum
        
        if (num===1){
          setPlayer1(user)
        } 
        if(num===2){
          setPlayer2(user)
        }

        
        console.log('num= ',data.playerNum)
        //prepare dispatch payload
        // let test ="...state.table1"
        // let player='player'+data.player
        // let table ='table'+data.table
        // dispatch({ type: "join-tablet", payload: {table: table, player: player, test: test}})
        // console.log(pongTables)
      })
      socket.on('leave-table', (data) => {
        console.log('leaving table data: ', data)
        let num = data.player
        if (num===1){
          setPlayer1('')
        } 
        if(num===2){
          setPlayer2('')
        }
      })
    }
    
      useEffect(()=>{
        if(socket)
        socket.on('table-joined', ()=>{
          console.log('steyherye')
          })
      }, [socket])
    return (

   

    <div className="pong_table">
      <div className="table_title"><h2>Table {id}</h2></div>
      <div className="game_table">
        <div className="player_names_display">
          <div className="player_name player_1_name">{player1&&player1.username}</div>
          <div className="player_name player_2_name">{player2&&player2.username}</div>
        </div>
        <div className="pong_player player_1">
          <button onClick={()=>joinTable2(1)}>Join</button>
          <button onClick={()=>leaveTable(1)}>Leave</button>
        </div>
        <div className="pong_player player_2">
          <button onClick={()=>joinTable2(2)}>Join</button>
          <button onClick={()=>leaveTable(2)}>Leave</button>

        </div>

      </div>
    </div>
  )
}